<template>
    <group >
      <cell v-for="(parkingOrder, index) in allowRodOrders" :key="index" :title="parkingOrder.customer.carNumber"  :inline-desc="fetchCarAddress.FETCH_CAR_ADDRESS[parkingOrder.fetchCarAddress]">
          <div>
              <x-button plain type="primary" @click.native="robParkingOrder(parkingOrder.id, index)">抢单</x-button>
          </div>
      </cell>
<!--      <cell v-for="( parkOrder, index) in getOrderList" v-bind:key="index" :title="parkOrder.carNumber"  :inline-desc="parkOrder.fetchCarPosition">-->
<!--        <div>-->
<!--          <x-button plain type="primary" @click.native="robParkOrder(parkOrder)"  v-show="!parkOrder.isRobbing">抢单</x-button>-->
<!--          <spinner type="bubbles" v-show="parkOrder.isRobbing"></spinner>-->
<!--          <label v-show="parkOrder.isRobbing">抢单中...</label>-->
<!--        </div>-->
<!--      </cell>-->
    </group>
</template>
<script>
export default {
  data () {
    return {
      allowRodOrders: []
    }
  },
  computed: {
    getOrderList () {
      return this.$store.state.orderList
    }
  },
  methods: {
    robParkOrder (parkOrder) {
      this.$store.commit('robParkOrder', parkOrder)
      // this.$store.dispatch('robParkOrder',parkOrder)
    },
    robParkingOrder (parkingOrderId, index) {
      let payload = {
        parkingOrderId: parkingOrderId,
        parkingBoy: {
          id: 1
        }
      }
      this.axios.post('parking-orders/' + payload.parkingOrderId + '/parking-boy', payload.parkingBoy).then((response) => {
        this.allowRodOrders.splice(index, 1)
        this.$store.commit('setCurrentOrder', response.data)
        this.$router.push({name: 'currentOrder'})
      }).catch((kkkkkk) => {
        // todo
        // this.$vux.alert.show({
        //   title: '抢单失败',
        //   content: response.message
        // })
      })
    }
  },
  mounted () {
    let payload = {
      type: 1,
      parkingBoyId: 1
    }

    this.$store.dispatch('getParkingOrders', payload).then((response) => {
      this.allowRodOrders = this.$store.state.parkingOrders.filter(item => {
        return item.status === 1
      })
    }).catch((response) => {
    })
  }
}
</script>
