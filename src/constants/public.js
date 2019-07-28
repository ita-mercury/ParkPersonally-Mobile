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

export default{
  GetLocalTime
}
