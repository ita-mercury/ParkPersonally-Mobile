import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/customer/Home'
import CreateOrder from '../views/customer/CreateOrder'
import PersonalCenter from '../views/customer/PersonalCenter'
import ParkingBoyHome from '../views/parkingboy/Home'
import ParkOrder from '../views/parkingboy/ParkOrder'
import Map from '../views/Map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '', name: 'PersonalCenter', component: PersonalCenter},
        {path: '/createOrder', name: 'createOrder', component: CreateOrder},
        {path: '/map', name: 'map', component: Map}
      ]
    },
    {
      path:'/parkingBoyHome',
      name:'parkingBoyHome',
      component:ParkingBoyHome,
      children:[
        {path: '/parkOrder', name: 'ParkOrder', component: ParkOrder}
      ]
    }
  ]
})
