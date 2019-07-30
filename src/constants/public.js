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
    1: {customerText: '待接单', customerColor: '#ff9278', customerOperationText: '等待接单', customerDisabled: true, customerShowComment: false, parkingBoyText: '待接单', parkingBoyColor: '#ff9278', parkingBoyOperationText: '待接单', parkingBoyDisabled: true},
    2: {customerText: '待停车', customerColor: '#4097f3', customerOperationText: '订单已被接，停车中...', customerDisabled: true, customerShowComment: false, parkingBoyText: '待停车', parkingBoyColor: '#4097f3', parkingBoyOperationText: '确认停车完成', parkingBoyDisabled: false},
    3: {customerText: '已完成', customerColor: '#0ba90b', customerOperationText: '我要取车', customerDisabled: false, customerShowComment: true, parkingBoyText: '已完成', parkingBoyColor: '#0ba90b', parkingBoyOperationText: '已完成', parkingBoyDisabled: true},
    6: {customerText: '已完成', customerColor: '#0ba90b', customerOperationText: '已申请取车', customerDisabled: true, customerShowComment: true, parkingBoyText: '已完成', parkingBoyColor: '#0ba90b', parkingBoyOperationText: '已完成', parkingBoyDisabled: true}
  },
  2: {
    1: {customerText: '待接单', customerColor: '#ff9278', customerOperationText: '等待接单', customerDisabled: true, customerShowComment: false, parkingBoyText: '待接单', parkingBoyColor: '#ff9278', parkingBoyOperationText: '待接单', parkingBoyDisabled: true},
    2: {customerText: '待取车', customerColor: '#4097f3', customerOperationText: '订单已被接，取车中...', customerDisabled: true, customerShowComment: false, parkingBoyText: '待取车', parkingBoyColor: '#4097f3', parkingBoyOperationText: '我已取车', parkingBoyDisabled: false},
    4: {customerText: '取车完成', customerColor: '#0ba90b', customerOperationText: '确认完成', customerDisabled: false, customerShowComment: false, parkingBoyText: '等待客户确认', parkingBoyColor: '#0ba90b', parkingBoyOperationText: '等待客户确认', parkingBoyDisabled: true},
    5: {customerText: '已完成', customerColor: '#0ba90b', customerOperationText: '已完成', customerDisabled: true, customerShowComment: true, parkingBoyText: '已完成', parkingBoyColor: '#0ba90b', parkingBoyOperationText: '已完成', parkingBoyDisabled: true}
  }
}

export default{
  GetLocalTime,
  OrderStatus
}
