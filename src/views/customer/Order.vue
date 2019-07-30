<template>
  <div style="height: 100%">
    <tab>
      <tab-item selected @on-item-click="selectTabItem">全部订单</tab-item>
      <tab-item @on-item-click="selectTabItem">停车订单</tab-item>
      <tab-item @on-item-click="selectTabItem">取车订单</tab-item>
    </tab>
    <div style="overflow: auto; height: 100%">
      <group label-width="5em" v-for="(order, index) in orderList" :key="order.id" v-if="order.isShow">
        <cell primary="content" :is-link="true" @click.native="selectOrder(index)">
          <div slot>
            <div style="float:left">
              <span>{{fetchCarAddress.FETCH_CAR_ADDRESS[order.fetchCarAddress]}}</span>
            </div>
            <div style="width: 30%; float:right">
              <span :style="{color: publicConstants.OrderStatus[order.type][order.status].customerColor}">{{publicConstants.OrderStatus[order.type][order.status].customerText}}</span>
            </div>
            <div style="float:right; font-size: .8em; margin-top: 3px">
              <span>{{publicConstants.GetLocalTime(order.createTime)}}</span>
            </div>
          </div>
          <img class="park-img" slot="title" :src="parkImg" v-if="order.type === 1"/>
          <img class="park-img" slot="title" :src="fetchImg" v-else/>
        </cell>
      </group>
      <div class="temp-div"></div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      parkImg: require('../../assets/image/park.png'),
      fetchImg: require('../../assets/image/fetch.png'),
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      orderList: []
    }
  },
  methods: {
    selectOrder (index) {
      this.$store.commit('setCurrentOrder', this.orderList[index])
      this.$router.push({name: 'customerCurrentOrder'})
    },
    selectTabItem (index) {
      if (index === 0) {
        for (let i = 0; i < this.orderList.length; i++) {
          let order = this.orderList[i]
          order['isShow'] = true
          this.$set(this.orderList, i, order)
        }
      } else if (index === 1) {
        for (let i = 0; i < this.orderList.length; i++) {
          let isShow = false
          if (this.orderList[i]['type'] === 1) {
            isShow = true
          }
          let order = this.orderList[i]
          order['isShow'] = isShow
          this.$set(this.orderList, i, order)
        }
      } else if (index === 2) {
        for (let i = 0; i < this.orderList.length; i++) {
          let isShow = false
          if (this.orderList[i]['type'] === 2) {
            isShow = true
          }
          let order = this.orderList[i]
          order['isShow'] = isShow
          this.$set(this.orderList, i, order)
        }
      }
    }
  },
  mounted () {
    this.$store.commit('setShowBack', false)
    this.axios.get('customers/13/allOrders').then((response) => {
      this.orderList = response.data
      for (let i = 0; i < this.orderList.length; i++) {
        this.orderList[i]['isShow'] = true
        console.log('=========================================')
        console.log(JSON.stringify(this.publicConstants.OrderStatus))
        console.log(this.publicConstants.OrderStatus[this.orderList.type][this.orderList.status].customerColor)
        console.log('=========================================')
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>
</style>
