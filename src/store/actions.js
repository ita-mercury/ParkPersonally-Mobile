import { test, postParkingOrders } from '../api'

const actions = {
  async test ({ commit }) {
    commit('test', await test())
  },
  async robParkOrder ({ commit }, parkOrder) {
    commit('robParkOrder', parkOrder)
  },
  async postParkingOrders ({ commit }) {
    commit('postParkingOrders', await postParkingOrders())
  }
}

export default actions
