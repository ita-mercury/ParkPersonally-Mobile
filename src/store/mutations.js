const mutations = {
  test (state, payload) {
  },
  robParkOrder (state, parkOrder) {
    parkOrder.isRobbing = true
  },
  postParkingOrders (state, parkingOrder) {
    state.parkingOrder = parkingOrder
  }
}

export default mutations
