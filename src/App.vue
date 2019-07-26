<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
<!--    <loading :show="show" :text="text"></loading>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: true,
      text: '厉害了'
    }
  }
}
</script>

<style>
  @import './assets/css/style.css';
</style>
