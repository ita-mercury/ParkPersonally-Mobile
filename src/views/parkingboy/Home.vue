<template>
  <div>
    <x-header  :left-options="{showBack: false}"><strong>{{$store.state.headerText}}</strong></x-header>
    <div class="customer-content">
      <router-view></router-view>
      <div class="temp-div"></div>
    </div>
    <tabbar class="parking-boy-home-tabbar" v-model="$store.state.currentItemIndex">
      <tabbar-item show-dot link="/parkOrder">
        <img slot="icon" src="../../assets/image/item1.png">
        <span slot="label">停车</span>
      </tabbar-item>
      <tabbar-item show-dot link="/FetchOrder">
        <img slot="icon" src="../../assets/image/item2.png">
        <span slot="label">取车</span>
      </tabbar-item>
      <tabbar-item badge="1" link="/HistoryOrder">
        <img slot="icon" src="../../assets/image/item3.png">
        <span slot="label">历史订单</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/ParkingBoyPersonalCenter">
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

    }
  },
  methods: {

  }
}
</script>

<style>
</style>
