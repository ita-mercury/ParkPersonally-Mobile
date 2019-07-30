import Vue from 'vue'
import Router from 'vue-router'
import customerLogin from '../views/customer/Login'
import parkingBoyLogin from '../views/parkingboy/Login'
import Register from '../views/customer/Register'
import ParkingBoyRegister from '../views/parkingboy/Register'
import Home from '../views/customer/Home'
import CreateOrder from '../views/customer/CreateOrder'
import PersonalCenter from '../views/customer/PersonalCenter'
import ParkingBoyPersonalCenter from '../views/parkingboy/PersonalCenter'
import ParkingBoyHome from '../views/parkingboy/Home'
import ParkOrder from '../views/parkingboy/ParkOrder'
import Order from '../views/customer/Order'
import FetchOrder from '../views/parkingboy/FetchOrder'
import CurrentOrder from '../views/parkingboy/CurrentOrder'
import CustomerCurrentOrder from '../views/customer/CurrentOrder'
import HistoryOrder from '../views/parkingboy/HistoryOrder'
import Map from '../views/Map'
import MyMessage from '../views/customer/MyMessage'
import LoginAction from '../views/public/LoginAction'
import customerConstants from '../constants/customer'
import fetchCarAddress from '../constants/fetchCarAddress'
import publicConstants from '../constants/public'

Vue.use(Router)
Vue.prototype.customerConstants = customerConstants
Vue.prototype.fetchCarAddress = fetchCarAddress
Vue.prototype.publicConstants = publicConstants

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
      path: '/parkingBoyRegister',
      name: 'parkingBoyRegister',
      component: ParkingBoyRegister
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
        {path: '/myMessage', name: 'myMessage', component: MyMessage},
        {path: '/customerCurrentOrder', name: 'customerCurrentOrder', component: CustomerCurrentOrder}
      ]
    },
    {
      path: '/parkingBoyHome',
      name: 'parkingBoyHome',
      component: ParkingBoyHome,
      children: [
        {path: '/parkOrder', name: 'ParkOrder', component: ParkOrder},
        {path: '/FetchOrder', name: 'FetchOrder', component: FetchOrder},
        {path: '/HistoryOrder', name: 'HistoryOrder', component: HistoryOrder},
        {path: '/ParkingBoyPersonalCenter', name: 'ParkingBoyPersonalCenter', component: ParkingBoyPersonalCenter},
        {path: '/currentOrder', name: 'currentOrder', component: CurrentOrder}
      ],
      redirect: '/parkOrder'
    }
  ]
})
