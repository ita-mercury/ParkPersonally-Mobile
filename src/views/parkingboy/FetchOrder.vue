<template>
    <group >
      <cell :title="fetchOrder.customer.carNumber"  :inline-desc="fetchOrder.parkingLot.name + ' ' + fetchOrder.positionNumber + '号'" v-for="(fetchOrder, index) in allowRodOrders" :key="fetchOrder.id">
          <div>
            <x-button plain type="primary" @click.native="robFetchingOrder(fetchOrder.id, index)">抢单</x-button>
          </div>
      </cell>
    </group>
</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      isRobbing: false,
      allowRodOrders: []
    }
  },
  methods: {
    robFetchingOrder (fetchingOrderId, index) {
      let payload = {
        fetchingOrderId: fetchingOrderId,
        parkingBoy: {
          id: 1
        }
      }
      this.axios.post('parking-orders/' + payload.fetchingOrderId + '/parking-boy', payload.parkingBoy).then((response) => {
        this.allowRodOrders.splice(index, 1)
        this.$store.commit('setCurrentOrder', response.data)
        this.$router.push({name: 'currentOrder'})
      }).catch((error) => {
        // todo
        AlertModule.show({
          title: '抱歉！抢单失败',
          content: error.response.data,
          onShow () {
          },
          onHide () {
          }
        })
      })
    }
  },
  mounted () {
    let payload = {
      type: 2,
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

<style>

</style>
