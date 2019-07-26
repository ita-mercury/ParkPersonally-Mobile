<template>
  <div>
    <div>
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>

      <group >
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>

      <group >
        <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>

      <x-button style="margin-top: 30px; width: 50%" plain type="primary">创建订单</x-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  .overwrite-title-demo {

  }
</style>
