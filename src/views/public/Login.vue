<template>
  <div>
    <x-header :left-options="{showBack: false}"><strong>ParkPersonally</strong></x-header>
    <div class="img-div">
      <x-img class="test-img" :src="imgSrc" :webp-src="`${imgSrc}?type=webp`"/>
    </div>
    <div style="width:60%;margin:15px auto; ">
      <h2 style="text-align: center">用户登录</h2>
    </div>
    <div style="width: 60%; margin: 15px auto; ">
      <group label-width="5em">
        <x-input title="用户名：" v-model="user.email"  name="username" placeholder="请输入用户名" ></x-input>
      </group>
      <group label-width="5em">
        <x-input title="密码：" v-model="user.password" name="password" type="password" placeholder="请输入密码"></x-input>
      </group>
      <group>
        <checklist required :options="commonList" v-model="checklist" :max="1" ></checklist>
      </group>
      <x-button style="margin-top: 20px" plain type="primary" @click.native="submit">login</x-button>
      <br>
      <div style="text-align: center">
        <router-link to="/register" style="color:#55ad2f;">没有账号？去注册</router-link>
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
        password: ''
      },
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      showMenus: false,
      commonList: ['客户', '停车员'],
      checklist: []
    }
  },
  methods: {
    submit () {
      console.log(JSON.stringify(this.user))
      // this.axios.post('http://localhost:8888/customers', this.user).then((response) => {
      //   console.log(response.data)
      // }).catch((response) => {
      //   console.log(response)
      // })
      this.$router.push({name: 'personalCenter'})
    }
  }
}
</script>

<style>
  .overwrite-title-demo {
    margin-top: 5px;
  }
</style>
