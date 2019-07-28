<template>
  <div class="register-div" style="text-align: center">
    <x-header :left-options="{backText: ''}"><strong>ParkPersonally</strong></x-header>
    <img class="parking-logo-img" :src="parkLogoImg"/>
    <div style="width: 80%; margin: 10% auto; ">
      <group label-width="5em">
        <x-input title="用户名：" v-model="user.email"  name="email" placeholder="请输入用户名" ></x-input>
      </group>
      <group label-width="5em">
        <x-input title="密码：" v-model="user.password" name="password" type="password" placeholder="请输入密码"></x-input>
      </group>
      <group label-width="5em">
        <x-input title="确认密码：" v-model="user.confirmPassword" name="confilmPassword" type="password" placeholder="请再次输入密码"></x-input>
      </group>
      <x-button style="margin-top: 30px" plain @click.native="handRegister">register</x-button>
      <br>
      <div style="text-align: center">
        <router-link to="/customerLogin" style="color:#35495e;" >已有账号？去登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      showMenus: false,
      parkLogoImg: require('../../assets/image/parkingLogo.png')
    }
  },
  methods: {
    handRegister () {
      console.log(JSON.stringify(this.user))
      this.axios.post('/vue-demo/api/getdata', this.user).then((response) => {
        console.log(response.data)
      }).catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
  .overwrite-title-demo {
    margin-top: 5px;
  }
</style>
