<template>
  <div>
    <x-header :left-options="{showBack: false}"><strong>ParkPersonally</strong></x-header>
    <div class="img-div">
      <x-img class="test-img" :src="imgSrc" :webp-src="`${imgSrc}?type=webp`"/>
    </div>
    <div style="width:60%;margin:15px auto; ">
      <h2 style="margin-left: 70px">用户注册</h2>
    </div>
    <div style="width: 80%; margin: 15px auto; ">
      <group>
        <x-input title="用户名：" v-model="user.username"  name="username" placeholder="请输入用户名" ></x-input>
      </group>
      <group>
        <x-input title="密码：" v-model="user.password" name="password" type="password" placeholder="请输入密码"></x-input>
      </group>
      <group>
        <x-input title="确认密码：" v-model="user.confilmPassword" name="confilmPassword" type="password" placeholder="请再次输入密码"></x-input>
      </group>
      <x-button style="margin-top: 20px" plain type="primary" @click.native="handRegister">register</x-button>
      <br>
      <router-link to="/login" style="color:#55ad2f;margin-left: 100px" >已有账号？去登录</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        confilmPassword: ''
      },
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      showMenus: false
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
