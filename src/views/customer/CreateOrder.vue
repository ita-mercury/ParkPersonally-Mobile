<template>
  <div>
    <div>
      <group label-width="6em">
        <x-input title="车牌号" name="username" v-model="order.customer.carNumber" placeholder="请输入车牌号"></x-input>
      </group>

      <group label-width="6em">
        <x-input title="手机号码" name="mobile" v-model="order.customer.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group label-width="6em">
        <selector v-model="order.fetchCarAddress" title="位置" name="fetchCarAddress" :options="list" @on-change="onChange"></selector>
<!--        <x-input v-model="order.fetchCarAddress" title="位置" name="fetchCarAddress" placeholder="请输入地址"></x-input>-->
      </group>

      <div style="margin-top: 20px" class="tag-div">
        <Select size="large" v-model="order.tags" filterable multiple placeholder="停车员标签">
          <Option v-for="item in $store.state.tags" :value="item.id" :key="item.id">{{ item.feature }}</Option>
        </Select>
      </div>
      <x-button style="margin-top: 30px; width: 50%" plain @click.native="postParkingOrders" :disabled="!order.fetchCarAddress">创建订单</x-button>
    </div>
  </div>
</template>

<script>
import { AlertModule } from 'vux'
export default {
  data () {
    return {
      order: {
        fetchCarAddress: '',
        tags: [],
        type: 1,
        customer: {
          id: 13,
          carNumber: '粤C-12117',
          email: '774629027@qq.com',
          password: 'adsads',
          phone: '13195641587'
        }
      },
      showAlert: false,
      list: []
    }
  },
  methods: {
    postParkingOrders () {
      let self = this
      for (let i = 0; i < this.order.tags.length; i++) {
        for (let j = 0; j < this.$store.state.tags.length; j++) {
          if (this.order.tags[i] === this.$store.state.tags[j].id) { this.order.tags[i] = this.$store.state.tags[j] }
        }
      }
      this.$store.dispatch('postParkingOrders', this.order).then((response) => {
        AlertModule.show({
          title: '恭喜',
          content: '创建订单成功',
          onShow () {
          },
          onHide () {
            self.$store.commit('setCurrentItemIndex', 1)
            self.$router.push({name: 'order'})
          }
        })
      }).catch((error) => {
        console.log(error)
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
    onChange (value) {
      console.log(value)
    }
  },
  mounted () {
    this.$store.dispatch('getTags')
    for (let key in this.fetchCarAddress.FETCH_CAR_ADDRESS) {
      let address = {}
      address['key'] = key
      address['value'] = this.fetchCarAddress.FETCH_CAR_ADDRESS[key]
      this.list.push(address)
    }
  }
}
</script>

<style>
</style>
