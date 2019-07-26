<template>
  <div>
    <x-header :left-options="{showBack: false}"><strong>ParkPersonally</strong></x-header>
    <div class="img-div">
      <x-img class="test-img" :src="imgSrc" :webp-src="`${imgSrc}?type=webp`"/>
    </div>
    <div style="width: 60%; margin: 15px auto; ">
      <group>
        <x-input title="用户名：" name="username" placeholder="请输入用户名" ></x-input>
      </group>
      <group>
        <x-input title="密码：" name="username" type="password" placeholder="请输入密码"></x-input>
      </group>
      <x-button style="margin-top: 20px" plain type="primary">login</x-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      showMenus: false
    }
  }
}
</script>

<style>
  .overwrite-title-demo {
    margin-top: 5px;
  }
</style>
