import axios from './config'

export const test = () => axios.get('orders')

export const postParkingOrders = (payload) => axios.post('parking-orders', payload)
