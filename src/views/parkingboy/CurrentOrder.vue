<template>
  <div>
    <group label-width="7em" class="current-order-group">
      <cell primary="content" title="订单编号" :value="currentOrder.id"></cell>
      <cell primary="content" title="订单类型" :value="getType(currentOrder.type)"></cell>
      <cell primary="content" title="车牌号" :value="currentOrder.customer.carNumber"></cell>
      <cell primary="content" title="交车位置" :value="fetchCarAddress.FETCH_CAR_ADDRESS[currentOrder.fetchCarAddress]"></cell>
      <cell primary="content" title="车主电话" :value="currentOrder.customer.phone"></cell>
      <cell primary="content" title="订单生成时间" :value="publicConstants.GetLocalTime(currentOrder.createTime)"></cell>
      <cell primary="content" :value="currentOrder.customer.phone">
        <span slot="title">停车场</span>
        <div slot>
          <Select size="large" v-model="currentParkingLot" filterable placeholder="停车场">
            <Option v-for="parkingLot in $store.state.parkingLots" :value="parkingLot.id" :key="parkingLot.id">
              {{ parkingLot.name }}
              <span style="color: red">({{parkingLot.restCapacity}})</span>
            </Option>
          </Select>
        </div>
      </cell>
      <x-input title="输入停车车位" name="positionNumber" type="number" v-model="positionNumber"></x-input>
    </group>
    <div style="width: 80%; margin: 50px auto">
      <x-button plain type="primary" @click.native="finishParking">停车完成</x-button>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      currentOrder: this.$store.state.currentOrder,
      // currentOrder: {
      //   id: 1,
      //   type: 1,
      //   customer: {}
      // },
      currentParkingLot: 1,
      positionNumber: 0
    }
  },
  methods: {
    getType (type) {
      if (type === 1) {
        return '停车订单'
      } else if (type === 2) {
        return '取车订单'
      }
    },
    finishParking () {
      for (let i = 0; i < this.$store.state.parkingLots.length; i ++) {
        if (this.$store.state.parkingLots[i].id === this.currentParkingLot) {
          this.currentOrder['parkingLot'] = this.$store.state.parkingLots[i]
        }
      }
      this.currentOrder['positionNumber'] = this.positionNumber
      // console.log(JSON.stringify(this.currentOrder))
      this.axios.put('parking-orders/' + this.currentOrder.id, this.currentOrder).then((response) => {
        console.log(JSON.stringify(response.data))
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.axios.get('parking-boys/1/parking-lots').then((response) => {
      this.$store.commit('setParkingLots', response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>
