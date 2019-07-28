<template>
  <div>
    <x-header :left-options="{showBack: false}"><strong>ParkPersonally</strong></x-header>
    <div class="customer-content">
      <router-view class="child-view"></router-view>
      <div class="temp-div"></div>
    </div>
    <tabbar>
      <tabbar-item show-dot link="/createOrder">
        <img slot="icon" src="../../assets/image/item2.png">
        <span slot="label">想要停车</span>
      </tabbar-item>
      <tabbar-item badge="1" link="/order">
        <img slot="icon" src="../../assets/image/item3.png">
        <span slot="label">我的订单</span>
      </tabbar-item>
      <tabbar-item link="/myMessage">
        <img slot="icon" src="../../assets/image/item5.png">
        <span slot="label">我的消息</span>
      </tabbar-item>
      <tabbar-item badge="2" selected :link="{replace: true, name: 'personalCenter'}">
        <img slot="icon" src="../../assets/image/item4.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      transitionName: 'slide-left',
      currentItemIndex: 3
    }
  },
  methods: {
  }

}
</script>

<style>
</style>
