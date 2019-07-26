// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import { XHeader, XImg, Loading, XInput, Group, XButton, Actionsheet, Tabbar, TabbarItem, Cell } from 'vux'

Vue.component('x-img', XImg)
Vue.component('x-header', XHeader)
Vue.component('loading', Loading)
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('x-button', XButton)
Vue.component('actionsheet', Actionsheet)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('cell', Cell)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  store,
  axios,
  router: router,
  render: h => h(App)
}).$mount('#app')
