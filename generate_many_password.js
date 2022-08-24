const nodeExcel = require('excel-export')

function generateManyPassword(res, array, time) {
  const conf ={}
  conf.name = "mysheet"
  conf.cols = [{
    caption:'password', //first col and first row name
    type:'string',   
	}]
 
  conf.rows = []
  for (let i = 0; i < array.length; i++) {
    conf.rows[i] = [array[i]]
  }

  const result = nodeExcel.execute(conf)
  res.setHeader('Content-Type', 'application/vnd.openxmlformats')
  res.setHeader("Content-Disposition", "attachment; filename=" + `${time}Password.xlsx`)
  res.end(result, 'binary')
}


module.exports = generateManyPassword