<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/image/item1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/image/item2.png">
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets/image/item3.png">
        <span slot="label">已接订单</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/image/item4.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
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
