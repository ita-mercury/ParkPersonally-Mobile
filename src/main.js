
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import BaiduMap from 'vue-baidu-map'

import { GridItem, Grid, Drawer, Selector, XHeader, XImg, Loading, XInput, Group, XButton, Actionsheet, Tabbar, TabbarItem, Cell, Spinner, Card, Calendar, Tab, TabItem, Checklist, LoadingPlugin, Alert } from 'vux'

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
Vue.component('spinner', Spinner)
Vue.component('card', Card)
Vue.component('calendar', Calendar)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('checklist', Checklist)
Vue.component('checklist', Checklist)
Vue.component('alert', Alert)
Vue.component('selector', Selector)
Vue.component('drawer', Drawer)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(LoadingPlugin)
Vue.use(BaiduMap, {
  ak: 'muTqhf4nen30ClsU3rNts5F46e4EhGvl'
})

/* eslint-disable no-new */
new Vue({
  store,
  axios,
  router: router,
  render: h => h(App)
}).$mount('#app')
