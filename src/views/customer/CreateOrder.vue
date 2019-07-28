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
        <selector placeholder=" " v-model="order.fetchCarAddress" title="位置" name="fetchCarAddress" :options="list" @on-change="onChange"></selector>
      </group>

      <div style="margin-top: 20px" class="tag-div">
        <Select size="large" v-model="order.tags" filterable multiple placeholder="停车员标签">
          <Option v-for="item in $store.state.tags" :value="item.id" :key="item.id">{{ item.feature }}</Option>
        </Select>
      </div>

      <x-button style="margin-top: 30px; width: 50%" plain @click.native="postParkingOrders">创建订单</x-button>
    </div>
    <alert v-model="showAlert" title="恭喜" content="创建订单成功"></alert>
  </div>
</template>

<script>

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
      for (let i = 0; i < this.order.tags.length; i++) {
        for (let j = 0; j < this.$store.state.tags.length; j++) {
          if (this.order.tags[i] === this.$store.state.tags[j].id) { this.order.tags[i] = this.$store.state.tags[j] }
        }
      }
      // console.log(JSON.stringify(this.order))
      this.$store.dispatch('postParkingOrders', this.order).then((response) => {
        this.showAlert = true
        console.log(JSON.stringify(this.$store.state.parkingOrder))
      }).catch((response) => {
        console.log(response)
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
