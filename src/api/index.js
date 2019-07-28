import axios from './config'

export const test = () => axios.get('orders')

export const postParkingOrders = () => axios.post('parking-orders')
