<template>
  <div>
    <group label-width="7em" class="current-order-group">
      <cell primary="content" title="订单编号" :value="currentOrder.id"></cell>
      <cell primary="content" title="订单类型" :value="getType(currentOrder.type)"></cell>
      <cell primary="content" title="车牌号" :value="currentOrder.customer.carNumber"></cell>
      <cell primary="content" title="交车位置" :value="currentOrder.fetchCarAddress"></cell>
      <cell primary="content" title="车主电话" :value="currentOrder.customer.phone"></cell>
      <cell primary="content" title="订单生成时间" :value="publicConstants.GetLocalTime(currentOrder.createTime)"></cell>
      <cell primary="content" v-if="currentOrder.type === 1">
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
      <x-input v-if="currentOrder.type === 1" title="输入停车车位" name="positionNumber" type="number" v-model="positionNumber"></x-input>
    </group>
    <div style="width: 80%; margin: 50px auto">
      <x-button plain type="primary" @click.native="finishParking" v-if="currentOrder.type === 1" :disabled="!(positionNumber > 0) || publicConstants.OrderStatus[currentOrder.type][currentOrder.status].parkingBoyDisabled">{{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].parkingBoyOperationText}}</x-button>
      <x-button plain type="primary" @click.native="finishFetching" :disabled="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].parkingBoyDisabled" v-else>
        {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].parkingBoyOperationText}}
      </x-button>
    </div>
  </div>

</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      currentOrder: this.$store.state.currentOrder,
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
      for (let i = 0; i < this.$store.state.parkingLots.length; i++) {
        if (this.$store.state.parkingLots[i].id === this.currentParkingLot) {
          this.currentOrder['parkingLot'] = this.$store.state.parkingLots[i]
        }
      }
      this.currentOrder['positionNumber'] = this.positionNumber
      this.axios.put('parking-orders/' + this.currentOrder.id, this.currentOrder).then((response) => {
        AlertModule.show({
          title: '恭喜',
          content: '停车完成',
          onShow () {
          },
          onHide () {
          }
        })
        this.currentOrder = response.data
      }).catch((error) => {
        AlertModule.show({
          title: '抱歉！停车失败',
          content: error.response.data,
          onShow () {
          },
          onHide () {
          }
        })
      })
    },

    finishFetching () {
      this.axios.put('parking-orders/' + this.currentOrder.id, this.currentOrder).then((response) => {
        this.currentOrder = response.data
        AlertModule.show({
          title: '恭喜',
          content: '取车完成',
          onShow () {
          },
          onHide () {
          }
        })
      }).catch((error) => {
      })
    }
  },
  mounted () {
    this.$store.commit('setHeaderText', '订单详情')
    this.axios.get('parking-boys/1/parking-lots').then((response) => {
      this.$store.commit('setParkingLots', response.data)
    }).catch((error) => {
    })
  }
}
</script>

<style>

</style>
