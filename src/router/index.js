import Vue from 'vue'
import Router from 'vue-router'
import customerLogin from '../views/customer/Login'
import parkingBoyLogin from '../views/parkingboy/Login'
import Register from '../views/customer/Register'
import Home from '../views/customer/Home'
import CreateOrder from '../views/customer/CreateOrder'
import PersonalCenter from '../views/customer/PersonalCenter'
import ParkingBoyPersonalCenter from '../views/parkingboy/PersonalCenter'
import ParkingBoyHome from '../views/parkingboy/Home'
import ParkOrder from '../views/parkingboy/ParkOrder'
import Order from '../views/customer/Order'
import FetchOrder from '../views/parkingboy/FetchOrder'
import FetchOrderDetail from '../views/parkingboy/FetchOrderDetail'
import HistoryOrder from '../views/parkingboy/HistoryOrder'
import HistoryOrderDetail from '../views/parkingboy/HistoryOrderDetail'
import Map from '../views/Map'
import MyMessage from '../views/customer/MyMessage'
import LoginAction from '../views/public/LoginAction'
import customerConstants from '../constants/customer'

Vue.use(Router)
Vue.prototype.customerConstants = customerConstants

export default new Router({
  routes: [
    {
      path: '/customerLogin',
      name: 'customerLogin',
      component: customerLogin
    },
    {
      path: '/parkingBoyLogin',
      name: 'parkingBoyLogin',
      component: parkingBoyLogin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'loginAction',
      component: LoginAction
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {path: '/personalCenter', name: 'personalCenter', component: PersonalCenter},
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
        {path: '/FetchOrderDetail', name: 'FetchOrderDetail', component: FetchOrderDetail},
        {path: '/HistoryOrder', name: 'HistoryOrder', component: HistoryOrder},
        {path: '/HistoryOrderDetail', name: 'HistoryOrderDetail', component: HistoryOrderDetail},
        {path: '/ParkingBoyPersonalCenter', name: 'ParkingBoyPersonalCenter', component: ParkingBoyPersonalCenter}
      ]
    }
  ]
})
