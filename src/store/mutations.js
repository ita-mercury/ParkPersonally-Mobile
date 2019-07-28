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
  },
  getParkingOrders (state, parkingOrders) {
    state.parkingOrders = parkingOrders
  }
}

export default mutations
