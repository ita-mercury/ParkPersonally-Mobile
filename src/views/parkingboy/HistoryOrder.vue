<template>
  <div class="parking-boy-history-div">
    <scroller use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-28">
      <div>
        <group label-width="5em" v-for="(order, index) in historyOrders" :key="order.id" :class="{'highlight-div': !publicConstants.isOrderFinished(order)}">
          <cell primary="content" :is-link="true" @click.native="selectOrder(index)">
            <div slot>
              <div class="fetch-car-address-div-span">
                <span>{{order.fetchCarAddress}}</span>
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
    </scroller>
  </div>
</template>

<script>
export default {
  data () {
    return {
      historyOrders: [],
      parkImg: require('../../assets/image/park.png'),
      fetchImg: require('../../assets/image/fetch.png'),
      pulldownDefaultConfig: {
        content: '下拉刷新',
        height: 50,
        autoRefresh: false,
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '正在刷新...',
        clsPrefix: 'xs-plugin-pulldown-'
      }
    }
  },
  methods: {
    selectOrder (index) {
      this.$store.commit('setCurrentOrder', this.historyOrders[index])
      this.$router.push({name: 'currentOrder'})
    },
    refresh () {
      this.axios.get('/parking-boys/1/parking-orders').then((response) => {
        this.historyOrders = response.data
        this.$refs.scrollerBottom.reset({top: 0})
      })
    }
  },
  mounted () {
    this.$store.commit('setHeaderText', '历史订单')
    this.axios.get('/parking-boys/1/parking-orders').then((response) => {
      this.historyOrders = response.data
    })
  }
}
</script>

<style>

</style>
