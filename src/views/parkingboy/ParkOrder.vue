<template>
    <group >
      <cell v-for="(parkingOrder, index) in allowRodOrders" :key="index" :title="parkingOrder.customer.carNumber" >
          <div slot="inline-desc" style="margin-top: 2px">
            <span>{{parkingOrder.fetchCarAddress}}</span>
            <span style="float: right; margin-right: 10px">{{publicConstants.GetLocalTime(parkingOrder.createTime)}}</span>
          </div>
          <div>
              <x-button plain type="primary" @click.native="robParkingOrder(parkingOrder.id, index)">抢单</x-button>
          </div>
      </cell>
    </group>
</template>
<script>
import { AlertModule } from 'vux'
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
    robParkingOrder (parkingOrderId, index) {
      var self = this
      let payload = {
        parkingOrderId: parkingOrderId,
        parkingBoy: {
          id: 1
        }
      }
      this.axios.post('parking-orders/' + payload.parkingOrderId + '/parking-boy', payload.parkingBoy).then((response) => {
        this.allowRodOrders.splice(index, 1)
        this.$store.commit('setCurrentOrder', response.data)
        AlertModule.show({
          title: '恭喜',
          content: '抢单成功',
          onShow () {
          },
          onHide () {
            self.$router.push({name: 'currentOrder'})
          }
        })
      }).catch((error) => {
        AlertModule.show({
          title: '抱歉',
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
    this.$store.commit('setHeaderText', '停车订单')
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
