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
      <Select size="large" v-model="tags" filterable multiple placeholder="停车员标签" :disabled="currentOrder.type  === 2 && currentOrder.status === 3">
        <Option v-for="item in $store.state.tags" :value="item.id" :key="item.id">{{ item.feature}}</Option>
      </Select>
    </div>
    <div style="width: 80%; margin: 50px auto">
      <x-button plain type="primary" v-if="currentOrder.type === 1" @click.native="fetchCar" :disabled="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled">
        {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
      </x-button>
      <x-button plain type="primary" v-else @click.native="confirmFetchedCar" :disabled="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled">
        {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
      </x-button>
    </div>
    <div class="comment-div">
      <group>
        <cell>
          <span slot="title" v-if="currentOrder.type === 1">停车员评价</span>
          <span slot="title" v-else>取车员评价</span>
          <rater :disabled="currentOrder.comment !== null" v-model="comment.rate"></rater>
        </cell>
        <x-textarea placeholder="请输入评价" :disabled="currentOrder.comment !== null" v-model="comment.content"></x-textarea>
        <x-button style="width: 80%; margin-bottom: 10px" plain type="primary" @click.native="submitComment" :disabled="this.currentOrder.comment !== null">提交评价/反馈</x-button>
      </group>
    </div>
  </div>
</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      tags: [],
      comment: {},
      currentOrder: this.$store.state.currentOrder
    }
  },
  methods: {
    fetchCar () {
      this.axios.post('parking-orders', this.currentOrder).then((response) => {
        AlertModule.show({
          title: '恭喜',
          content: '创建订单成功',
          onShow () {
          },
          onHide () {
          }
        })
        this.currentOrder['status'] = 4
        console.log(JSON.stringify(response.data))
      }).catch((error) => {
        console.log(error)
      })
    },
    confirmFetchedCar () {
      this.axios.put('parking-orders/' + this.currentOrder.id, this.currentOrder).then((response) => {
        AlertModule.show({
          title: '恭喜',
          content: '确认订单成功',
          onShow () {
          },
          onHide () {
          }
        })
        this.currentOrder = response.data
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    submitComment () {
      console.log(JSON.stringify(this.comment))
      this.axios.post('/parking-orders/' + this.currentOrder.id + '/comments', this.comment).then((response) => {
        console.log(JSON.stringify(response))
        this.currentOrder['comment'] = this.comment
        AlertModule.show({
          title: '提交评论成功',
          onShow () {
          },
          onHide () {
          }
        })
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.$store.commit('setShowBack', true)
    this.$store.dispatch('getTags')
    console.log(JSON.stringify(this.$store.state.currentOrder))
    if (this.currentOrder.comment !== null) {
      this.comment = this.currentOrder.comment
    }
  }
}
</script>

<style>

</style>
