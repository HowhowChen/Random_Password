function today() {
  const moment = require('moment')
  moment.locale('zh-cn')

  let temp = moment().format('L').split('/')
  let today = ''
  temp.forEach(item => today += item)

  return today
}


module.exports = today