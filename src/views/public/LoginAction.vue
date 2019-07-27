<template>
  <div class="login-action-div">
    <div class="login-action-body">
      <x-header :left-options="{showBack: false}"><strong>ParkPersonally</strong></x-header>
      <img class="parking-logo-img" :src="parkLogoImg"/>
      <x-button style="margin-top: 30px; width: 50%" plain type="primary" @click.native="customerLogin">用户登录 / 注册</x-button>
      <x-button style="margin-top: 30px; width: 50%" plain type="primary">停车员登录 / 注册</x-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      parkLogoImg: require('../../assets/image/parkingLogo.png')
    }
  },
  methods: {
    customerLogin () {
      this.$router.push({name: 'customerLogin'})
    }
  }
}
</script>

<style>
  .overwrite-title-demo {

  }
</style>
