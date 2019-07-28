import { test, postParkingOrders, getTags, getParkingOrders, robParkingOrder } from '../api'

const actions = {
  async test ({ commit }) {
    commit('test', await test())
  },
  async robParkOrder ({ commit }, parkOrder) {
    commit('robParkOrder', parkOrder)
  },
  async postParkingOrders ({ commit }, payload) {
    commit('postParkingOrders', await postParkingOrders(payload))
  },
  async getTags ({ commit }) {
    commit('getTags', await getTags())
  },
  async getParkingOrders ({ commit }, payload) {
    commit('getParkingOrders', await getParkingOrders(payload))
  },
  async robParkingOrder ({ commit }, payload) {
    commit('robParkingOrder', await robParkingOrder(payload))
  }
}

export default actions
