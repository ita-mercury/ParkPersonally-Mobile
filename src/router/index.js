import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/public/Login'
import Register from '../views/public/Register'
import Home from '../views/customer/Home'
import CreateOrder from '../views/customer/CreateOrder'
import PersonalCenter from '../views/customer/PersonalCenter'
import ParkingBoyHome from '../views/parkingboy/Home'
import ParkOrder from '../views/parkingboy/ParkOrder'
import Order from '../views/customer/Order'
import FetchOrder from '../views/parkingboy/FetchOrder'
import FetchOrderDetail from '../views/parkingboy/FetchOrderDetail'
import Map from '../views/Map'
import MyMessage from '../views/customer/MyMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '', name: 'PersonalCenter', component: PersonalCenter},
        {path: '/createOrder', name: 'createOrder', component: CreateOrder},
        {path: '/order', name: 'order', component: Order},
        {path: '/map', name: 'map', component: Map},
        {path: '/myMessage', name: 'myMessage', component: MyMessage}
      ]
    },
    {
      path: '/parkingBoyHome',
      name: 'parkingBoyHome',
      component: ParkingBoyHome,
      children: [
        {path: '/parkOrder', name: 'ParkOrder', component: ParkOrder},
        {path: '/FetchOrder', name: 'FetchOrder', component: FetchOrder},
        {path: '/FetchOrderDetail', name: 'FetchOrderDetail', component: FetchOrderDetail}
      ]
    }
  ]
})
