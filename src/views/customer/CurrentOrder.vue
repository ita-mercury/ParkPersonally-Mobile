<template>
  <div class="currentOrder-div">
    <scroller class="scroller" use-pulldown :pulldown-config="pulldownDefaultConfig" @on-pulldown-loading="refresh"
              lock-x ref="scrollerBottom" height="-48">
      <div>
        <group label-width="7em" class="current-order-group">
          <cell primary="content" title="车牌号" :value="currentOrder.customer.carNumber"></cell>
          <cell primary="content" title="交车位置" :value="currentOrder.fetchCarAddress"></cell>
          <cell primary="content" title="车主电话" :value="currentOrder.customer.phone"></cell>
          <cell primary="content" title="停车场" :value="currentOrder.parkingLot.name" v-if="currentOrder.parkingLot !== null"></cell>
          <cell primary="content" title="停车场" value="" v-if="currentOrder.parkingLot === null"></cell>
          <cell primary="content" title="停车车位" :value="currentOrder.positionNumber"></cell>

          <cell primary="content" title="停车场" :value="currentOrder.parkingLot.name" v-if="currentOrder.parkingLot !== null"></cell>
          <cell primary="content" title="停车场" value="" v-if="currentOrder.parkingLot === null"></cell>

          <cell primary="content" title="停车员编号" v-if="currentOrder.parkingBoy !== null && currentOrder.type === 1" :value="currentOrder.parkingBoy.number"></cell>
          <cell primary="content" title="停车员手机号" v-if="currentOrder.parkingBoy !== null && currentOrder.type === 1" :value="currentOrder.parkingBoy.phone"></cell>
          <cell primary="content" title="取车员编号" v-if="currentOrder.parkingBoy !== null && currentOrder.type === 2" :value="currentOrder.parkingBoy.number"></cell>
          <cell primary="content" title="取车员手机号" v-if="currentOrder.parkingBoy !== null && currentOrder.type === 2" :value="currentOrder.parkingBoy.phone"></cell>
        </group>
        <div style="margin-top: 20px" class="tag-div" v-if="currentOrder.type  === 1 && currentOrder.status === 3">
          <Select size="large" v-model="currentOrder.tags" filterable multiple placeholder="停车员标签">
            <Option v-for="item in $store.state.tags" :value="item.id" :key="item.id">{{ item.feature}}</Option>
          </Select>
        </div>
        <div style="width: 80%; margin: 50px auto">
          <x-button plain type="primary" v-if="currentOrder.type === 1 && !publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled" @click.native="fetchCar" :disabled="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled">
            {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
          </x-button>
          <div v-if="currentOrder.type === 1 && publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled" class="order-status-div">
          <span :style="{color: publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerColor}">
            {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
          </span>
          </div>

          <x-button plain type="primary" v-if="currentOrder.type === 2 && !publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled" @click.native="confirmFetchedCar" :disabled="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled">
            {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
          </x-button>
          <div v-if="currentOrder.type === 2 && publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerDisabled" class="order-status-div">
          <span :style="{color: publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerColor}">
            {{publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerOperationText}}
          </span>
          </div>
        </div>
        <div class="comment-div" v-if="publicConstants.OrderStatus[currentOrder.type][currentOrder.status].customerShowComment">
          <group>
            <cell>
              <span slot="title" v-if="currentOrder.type === 1">停车员评价</span>
              <span slot="title" v-else>取车员评价</span>
              <rater :disabled="currentOrder.comment !== null" v-model="comment.rate"></rater>
            </cell>
            <x-textarea placeholder="请输入评价" v-if="currentOrder.comment === null" :disabled="currentOrder.comment !== null" v-model="comment.content"></x-textarea>
            <x-textarea placeholder="" v-if="currentOrder.comment !== null" :disabled="currentOrder.comment !== null" v-model="comment.content"></x-textarea>
            <x-button style="width: 80%; margin-bottom: 10px" plain type="primary" v-if="this.currentOrder.comment === null" @click.native="submitComment" :disabled="this.currentOrder.comment !== null">提交评价/反馈</x-button>
            <x-button style="width: 80%; margin-bottom: 10px" plain type="primary" v-else :disabled="this.currentOrder.comment !== null">已提交评价/反馈</x-button>
          </group>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      tags: [],
      comment: {},
      currentOrder: this.$store.state.currentOrder,
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
    fetchCar () {
      let req = JSON.parse(JSON.stringify(this.currentOrder))
      if (this.currentOrder.tags) {
        req['tags'] = []
        for (let i = 0; i < this.currentOrder.tags.length; i++) {
          let tag = {}
          tag['id'] = this.currentOrder.tags[i]
          req['tags'].push(tag)
        }
      }
      this.axios.post('parking-orders', req).then((response) => {
        AlertModule.show({
          title: '恭喜',
          content: '创建订单成功',
          onShow () {
          },
          onHide () {
          }
        })
        this.currentOrder['status'] = 6
      }).catch((error) => {
        AlertModule.show({
          title: '抱歉！创建订单失败',
          content: error.response.data,
          onShow () {
          },
          onHide () {
          }
        })
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
      }).catch((error) => {
        AlertModule.show({
          title: '抱歉！确认订单失败',
          content: error.response.data,
          onShow () {
          },
          onHide () {
          }
        })
      })
    },
    submitComment () {
      this.axios.post('/parking-orders/' + this.currentOrder.id + '/comments', this.comment).then((response) => {
        this.currentOrder['comment'] = this.comment
        AlertModule.show({
          title: '提交评论成功',
          onShow () {
          },
          onHide () {
          }
        })
      }).catch((error) => {
        AlertModule.show({
          title: '抱歉！提交评论失败',
          content: error.response.data,
          onShow () {
          },
          onHide () {
          }
        })
      })
    },
    refresh () {
      this.axios.get('/parking-orders/' + this.currentOrder.id).then((response) => {
        this.currentOrder = response.data
        this.$refs.scrollerBottom.reset({top: 0})
      })
    }
  },
  mounted () {
    this.$store.commit('setHeaderText', '订单详情')
    this.$store.commit('setShowBack', true)
    this.$store.dispatch('getTags')
    if (this.currentOrder.comment !== null) {
      this.comment = this.currentOrder.comment
    }
  }
}
</script>

<style>

</style>
