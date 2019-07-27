<template>
    <group >
      <cell v-for="( parkOrder, index) in getOrderList" v-bind:key="index" :title="parkOrder.carNumber"  :inline-desc="parkOrder.fetchCarPosition">
      <!-- <cell :title="'车牌号-粤C8888'"  inline-desc='南方软件园-B5'> -->
            <div>
                <x-button plain type="primary" @click.native="robParkOrder(parkOrder)"  v-show="!parkOrder.isRobbing">抢单</x-button>
                <spinner type="bubbles" v-show="parkOrder.isRobbing"></spinner>
                <label v-show="parkOrder.isRobbing">抢单中...</label>
            </div>
      </cell>
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
  }
}
</script>
