import axios from './config'

export const test = () => axios.get('orders')

export const getTags = () => axios.get('tags')

export const postParkingOrders = (payload) => axios.post('parking-orders', payload)
