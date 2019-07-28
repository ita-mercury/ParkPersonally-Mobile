const mutations = {
  test (state, payload) {
  },
  robParkOrder (state, parkOrder) {
    parkOrder.isRobbing = true
  },
  postParkingOrders (state, parkingOrder) {
    state.parkingOrder = parkingOrder
  },
  getTags (state, tags) {
    state.tags = tags
  }
}

export default mutations
