import { test } from '../api/index'

const actions = {
  async test ({ commit }) {
    commit('test', await test())
  },
  async robParkOrder ({ commit }, parkOrder) {
    commit('robParkOrder', parkOrder)
  }
}

export default actions
