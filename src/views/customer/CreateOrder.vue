<template>
  <div>
    <div>
      <group label-width="5em">
        <x-input title="车牌号" name="username" v-model="order.carNumber" placeholder="请输入车牌号" is-type="china-name"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="手机号码" name="mobile" v-model="order.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="位置" name="position" v-model="order.fetchCarPosition" placeholder="请输入位置信息" is-type="position"></x-input>
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
        carNumber: '',
        phone: '',
        fetchCarPosition: '',
        type: 1
      },
      showAlert: false
    }
  },
  methods: {
    createOrder () {
      this.showAlert = true
      // this.axios.post('http://10.222.232.28:8888/parking-orders', this.order).then((response) => {
      //   console.log(response.data)
      // }).catch((response) => {
      //   console.log(response)
      // })
    }
  }
}
</script>

<style>
  .overwrite-title-demo {

  }
</style>
