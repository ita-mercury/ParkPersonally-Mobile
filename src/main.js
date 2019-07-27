
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import BaiduMap from 'vue-baidu-map'
<<<<<<< Updated upstream
import { XHeader, XImg, Loading, XInput, Group, XButton, Actionsheet, Tabbar, TabbarItem, Cell, Spinner,Card} from 'vux'
=======
import { XHeader, XImg, Loading, XInput, Group, XButton, Actionsheet, Tabbar, TabbarItem, Cell, Spinner ,Calendar} from 'vux'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
Vue.component('card', Card)
=======
Vue.component('calendar', Calendar)
>>>>>>> Stashed changes
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
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
