const GetLocalTime = function (timestamp) {
  if (!timestamp) {
    return ''
  } else {
    let d = new Date(timestamp)
    let date = (d.getFullYear()) + '-' +
      (d.getMonth() + 1) + '-' +
      (d.getDate()) + ' ' +
      (d.getHours()) + ':' +
      (d.getMinutes()) + ':' +
      (d.getSeconds())
    return date
  }
}

const OrderStatus = {
  1: {
    1: {text: '待接单', color: '#ff9278'},
    2: {text: '待停车', color: '#4097f3'},
    3: {text: '已完成', color: '#0ba90b'}
  },
  2: {
    1: {text: '待接单', color: '#ff9278'},
    2: {text: '待取车', color: '#4097f3'},
    3: {text: '已完成', color: '#0ba90b'}
  }
}

export default{
  GetLocalTime,
  OrderStatus
}
