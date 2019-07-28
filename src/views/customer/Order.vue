<template>
  <div style="height: 100%">
    <tab>
      <tab-item selected>全部订单</tab-item>
      <tab-item >停车订单</tab-item>
      <tab-item >取车订单</tab-item>
    </tab>
    <div style="overflow: auto; height: 100%">
      <group label-width="5em" v-for="(order, index) in orderList" :key="order.id">
        <cell primary="content" :is-link="true" @click.native="selectOrder(index)">
          <div slot>
            <div style="float:left">
              <span>{{fetchCarAddress.FETCH_CAR_ADDRESS[order.fetchCarAddress]}}</span>
            </div>
            <div style="width: 30%; float:right">
              <span :style="{color: publicConstants.OrderStatus[order.type][order.status]['color']}">{{publicConstants.OrderStatus[order.type][order.status]['text']}}</span>
            </div>
            <div style="float:right; font-size: .8em; margin-top: 3px">
              <span>{{publicConstants.GetLocalTime(order.createTime)}}</span>
            </div>
          </div>
          <img class="park-img" slot="title" :src="parkImg" v-if="order.type === 1"/>
          <img class="park-img" slot="title" :src="fetchImg" v-else/>
        </cell>
      </group>
<!--      <group label-width="5em">-->
<!--        <cell primary="content" :is-link="true">-->
<!--          <div slot>-->
<!--            <div style="float:left">-->
<!--              <span>南方软件园-大榕树</span>-->
<!--            </div>-->
<!--            <div style="width: 30%; float:right">-->
<!--              <span>待接单</span>-->
<!--            </div>-->
<!--            <div style="float:right; font-size: .8em; margin-top: 3px">-->
<!--              <span>2019-5-20 5:50:32</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <img class="park-img" slot="title" :src="fetchImg"/>-->
<!--        </cell>-->
<!--      </group>-->
<!--      <group label-width="5em">-->
<!--        <cell primary="content" :is-link="true">-->
<!--          <div slot>-->
<!--            <div style="float:left">-->
<!--              <span>南方软件园-大榕树</span>-->
<!--            </div>-->
<!--            <div style="width: 30%; float:right">-->
<!--              <span>待接单</span>-->
<!--            </div>-->
<!--            <div style="float:right; font-size: .8em; margin-top: 3px">-->
<!--              <span>2019-5-20 5:50:32</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <img class="park-img" slot="title" :src="parkImg"/>-->
<!--        </cell>-->
<!--      </group>-->
<!--      <group label-width="5em">-->
<!--        <cell primary="content" :is-link="true">-->
<!--          <div slot>-->
<!--            <div style="float:left">-->
<!--              <span>南方软件园-大榕树</span>-->
<!--            </div>-->
<!--            <div style="width: 30%; float:right">-->
<!--              <span>待接单</span>-->
<!--            </div>-->
<!--            <div style="float:right; font-size: .8em; margin-top: 3px">-->
<!--              <span>2019-5-20 5:50:32</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <img class="park-img" slot="title" :src="fetchImg"/>-->
<!--        </cell>-->
<!--      </group>-->
<!--      <group label-width="5em">-->
<!--        <cell primary="content" :is-link="true">-->
<!--          <div slot>-->
<!--            <div style="float:left">-->
<!--              <span>南方软件园-大榕树</span>-->
<!--            </div>-->
<!--            <div style="width: 30%; float:right">-->
<!--              <span>待接单</span>-->
<!--            </div>-->
<!--            <div style="float:right; font-size: .8em; margin-top: 3px">-->
<!--              <span>2019-5-20 5:50:32</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <img class="park-img" slot="title" :src="parkImg"/>-->
<!--        </cell>-->
<!--      </group>-->
<!--      <group label-width="5em">-->
<!--        <cell primary="content" :is-link="true">-->
<!--          <div slot>-->
<!--            <div style="float:left">-->
<!--              <span>南方软件园-大榕树</span>-->
<!--            </div>-->
<!--            <div style="width: 30%; float:right">-->
<!--              <span>待接单</span>-->
<!--            </div>-->
<!--            <div style="float:right; font-size: .8em; margin-top: 3px">-->
<!--              <span>2019-5-20 5:50:32</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <img class="park-img" slot="title" :src="fetchImg"/>-->
<!--        </cell>-->
<!--      </group>-->
      <div class="temp-div"></div>
    </div>
<!--    {{customerConstants.TEST}}-->
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
    }
  },
  mounted () {
    this.axios.get('customers/13/allOrders').then((response) => {
      this.orderList = response.data
      // console.log(JSON.stringify(response.data))
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>
</style>
