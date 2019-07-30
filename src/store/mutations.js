const mutations = {
  test (state, payload) {
  },
  robParkOrder (state, parkOrder) {
    parkOrder.isRobbing = true
  },
  postParkingOrders (state, parkingOrder) {
    state.parkingOrder = parkingOrder.data
  },
  getTags (state, tags) {
    state.tags = tags.data
  },
  getParkingOrders (state, parkingOrders) {
    state.parkingOrders = parkingOrders.data
  },
  setCurrentOrder (state, parkingOrder) {
    state.currentOrder = parkingOrder
  },
  setParkingLots (state, parkingLots) {
    state.parkingLots = parkingLots
  },
  setShowBack (state, showBack) {
    state.showBack = showBack
  },
  setCurrentItemIndex (state, currentItemIndex) {
    state.currentItemIndex = currentItemIndex
  },
  setHeaderText (state, headerText) {
    state.headerText = headerText
  }
}

export default mutations
