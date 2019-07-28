<template>
  <div>
    <group label-width="7em" class="current-order-group">
      <cell primary="content" title="车牌号" :value="currentOrder.customer.carNumber"></cell>
      <cell primary="content" title="交车位置" :value="fetchCarAddress.FETCH_CAR_ADDRESS[currentOrder.fetchCarAddress]"></cell>
      <cell primary="content" title="车主电话" :value="currentOrder.customer.phone"></cell>
      <cell primary="content" title="停车场" :value="currentOrder.parkingLot.name"></cell>
      <cell primary="content" title="停车车位" :value="currentOrder.positionNumber"></cell>
    </group>
    <div style="margin-top: 20px" class="tag-div">
      <Select size="large" v-model="tags" filterable multiple placeholder="停车员标签">
        <Option v-for="item in $store.state.tags" :value="item.id" :key="item.id">{{ item.feature }}</Option>
      </Select>
    </div>
    <div style="width: 80%; margin: 50px auto">
      <x-button plain type="primary" @click.native="fetchCar">我要取车</x-button>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tags: [],
      currentOrder: this.$store.state.currentOrder
    }
  },
  methods: {
    fetchCar () {
      let order = {
        type: 2,
        positionNumber: this.currentOrder.positionNumber,
        fetchCarAddress: this.currentOrder.fetchCarAddress,
        tags: [],
        customer: {
          id: 13
        },
        parkingLot: this.currentOrder.parkingLot
      }

      for (let i = 0; i < this.tags.length; i++) {
        for (let j = 0; j < this.$store.state.tags.length; j++) {
          if (this.tags[i] === this.$store.state.tags[j].id) { order.tags.push(this.$store.state.tags[j]) }
        }
      }
      // console.log(JSON.stringify(order))

      this.axios.post('parking-orders', order).then((response) => {
        console.log(JSON.stringify(response.data))
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.$store.dispatch('getTags')
    console.log(JSON.stringify(this.$store.state.currentOrder))
  }
}
</script>

<style>

</style>
