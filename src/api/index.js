import axios from './config'

export const test = () => axios.get('orders')

export const getTags = () => axios.get('tags')

export const getParkingOrders = (payload) => axios.get('parking-orders?type=' + payload.type + '&parkingBoyId=' + payload.parkingBoyId)

export const postParkingOrders = (payload) => axios.post('parking-orders', payload)

export const robParkingOrder = (payload) => axios.post('parking-orders/' + payload.parkingOrderId + '/parking-boy', payload.parkingBoy)
