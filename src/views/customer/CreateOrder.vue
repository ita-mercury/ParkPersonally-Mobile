<template>
  <div>
    <div>
      <group label-width="5em">
        <x-input title="车牌号" name="username" v-model="order.carNumber" placeholder="请输入车牌号" is-type="china-name"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="手机号码" name="mobile" v-model="order.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group>
        <selector placeholder="请选择位置" v-model="order.fetchCarAddress" title="位置" name="fetchCarAddress" :options="list" @on-change="onChange"></selector>
      </group>

      <x-button style="margin-top: 30px; width: 50%" plain @click.native="createOrder">创建订单</x-button>
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
        type: 1,
        customer: {
          id: 10,
          carNumber: '4512247',
          email: '774629027@qq.com',
          password: 'adsads',
          phone: '587575'
        }
      },
      showAlert: false,
      list: [{key: 'tree', value: '大榕树'}, {key: 'shop', value: '小卖部'}]
    }
  },
  methods: {
    createOrder () {
      this.axios.post('/api/parking-orders', this.order).then((response) => {
        this.showAlert = true
        console.log(JSON.stringify(response))
        console.log(response.data)
      }).catch((response) => {
        console.log(response)
      })
    },
    onChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>
  .overwrite-title-demo {

  }
</style>
