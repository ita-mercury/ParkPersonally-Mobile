<template>
  <div>
    <group label-width="5em" v-for="(order, index) in historyOrders" :key="order.id">
      <cell primary="content" :is-link="true" @click.native="selectOrder(index)">
        <div slot>
          <div style="float:left">
            <span>{{fetchCarAddress.FETCH_CAR_ADDRESS[order.fetchCarAddress]}}</span>
          </div>
          <div style="width: 30%; float:right">
            <span :style="{color: publicConstants.OrderStatus[order.type][order.status].parkingBoyColor}">{{publicConstants.OrderStatus[order.type][order.status].parkingBoyText}}</span>
          </div>
          <div style="float:right; font-size: .8em; margin-top: 3px">
            <span>{{publicConstants.GetLocalTime(order.createTime)}}</span>
          </div>
        </div>
        <img class="park-img" slot="title" :src="parkImg" v-if="order.type === 1"/>
        <img class="park-img" slot="title" :src="fetchImg" v-else/>
      </cell>
    </group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      historyOrders: [],
      parkImg: require('../../assets/image/park.png'),
      fetchImg: require('../../assets/image/fetch.png')
    }
  },
  methods: {
    selectOrder (index) {
      this.$store.commit('setCurrentOrder', this.historyOrders[index])
      this.$router.push({name: 'currentOrder'})
    }
  },
  mounted () {
    this.axios.get('/parking-boys/1/parking-orders').then((response) => {
      this.historyOrders = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>
