<template>
  <div>
    <scroller use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-48">
      <div>
        <group >
          <cell :title="fetchOrder.customer.carNumber"  :inline-desc="fetchOrder.parkingLot.name + ' ' + fetchOrder.positionNumber + '号'" v-for="(fetchOrder, index) in allowRodOrders" :key="fetchOrder.id">
            <div>
              <x-button plain type="primary" @click.native="robFetchingOrder(fetchOrder.id, index)">抢单</x-button>
            </div>
          </cell>
        </group>
      </div>
    </scroller>
  </div>

</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      isRobbing: false,
      allowRodOrders: [],
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
    },
    refresh () {
      this.axios.get('customers/13/allOrders').then((response) => {
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
        this.$refs.scrollerBottom.reset({top: 0})
      })
    }
  },
  mounted () {
    this.$store.commit('setHeaderText', '取车订单')
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
