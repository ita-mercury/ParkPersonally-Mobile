<template>
    <group >
      <cell v-for="(parkingOrder, index) in $store.state.parkingOrders" :key="index" :title="parkingOrder.customer.carNumber"  :inline-desc="fetchCarAddress.FETCH_CAR_ADDRESS[parkingOrder.fetchCarAddress]">
          <div>
              <x-button plain type="primary">抢单</x-button>
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
    }
  },
  mounted () {
    let payload = {
      type: 1,
      parkingBoyId: 1
    }
    this.$store.dispatch('getParkingOrders', payload)
  }
}
</script>
