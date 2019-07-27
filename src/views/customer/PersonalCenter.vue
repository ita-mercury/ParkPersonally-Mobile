<template>
  <div>
    <div style="overflow-y: auto">
      <div class="img-div">
        <x-img class="personal-header-img" :src="imgSrc" :webp-src="`${imgSrc}?type=webp`" style="width: 60px"/>

      </div>

      <group label-width="5em" >
        <x-input title="用户名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="车牌号" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group label-width="5em">
        <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>

      <group label-width="5em">
        <cell primary="content" title="default" value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long"></cell>
      </group>
      <x-button style="margin-top: 30px; width: 50%" plain >保存</x-button>
      <router-link to="/" > <x-button style="margin-top: 15px; width: 50%" plain>退出</x-button></router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      imgSrc: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    }
  },
  methods: {
  }
}
</script>

<style>
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
