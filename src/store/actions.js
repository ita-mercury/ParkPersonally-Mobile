import { test, postParkingOrders, getTags } from '../api'

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
  }
}

export default actions
