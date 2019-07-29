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
    1: {text: '待接单', color: '#ff9278', operationText: '待接单', disabled: true},
    2: {text: '待停车', color: '#4097f3', operationText: '待停车', disabled: true},
    3: {text: '已完成', color: '#0ba90b', operationText: '我要取车', disabled: false}
  },
  2: {
    1: {text: '待接单', color: '#ff9278', operationText: '待接单', disabled: true},
    2: {text: '待取车', color: '#4097f3', operationText: '待取车', disabled: true},
    3: {text: '已完成', color: '#0ba90b', operationText: '已完成', disabled: true}
  }
}

export default{
  GetLocalTime,
  OrderStatus
}
