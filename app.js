const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const generateManyPassword = require('./generate_many_password')
const today = require('./today')
const mongoose = require('mongoose')
const passwordDB = require('./models/password')
const app = express()
const port = 3000

const time = today() //今日時間 e.g. 20220823

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/Password')
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connect!')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async(req, res) => {
  const options = req.body
  let password = ''
  // generate one password
  if (options.generatePassword === 'one') {
    password = generatePassword(options) 
    passwordDB.findOne({ password })
      .lean()
      .then(passwordDoc => {
        if (passwordDoc) {
          password = `password is repeated: ${passwordDoc.password}`
          return res.render('index', { password, options })  //{ password: password, options: options }
        } else {
          passwordDB.create({ password, time })
            .then(() => res.render('index', { password, options }))
            .catch(error => console.log(error))
        }
      })
      .catch(error => console.log(error))
  }

  // generate many password
  let count = 0
  if (options.generatePassword === 'many') {
    const manyPassword = []
    for (let i = 0; i < options.times; i++) {
      password = generatePassword(options) 
      await passwordDB.findOne({ password })
        .lean()
        .then(passwordDoc => {
          //未重複
          if (passwordDoc === null) {
            manyPassword.push(password)
            passwordDB.create({ password, time })
              .catch(error => console.log(error))
          } else {
            //重複
            switch (i) {
              case 0:
                i = -1        //0的話從-1開始，下一輪會再從0開始
                count ++       
                console.log('first crashed, keep goging')

                if (count >= 20) {     //集滿10次跳出迴圈  
                  i = options.times
                }      
                break
              default:
                i--
                break
            }
          }
        })
        .catch(error => console.log(error))
    }

    if (count < 20) {               //未滿10狀況。
      generateManyPassword(res, manyPassword, time)
    } else {
      password = '幾乎都重複了!!!!!'
      res.render('index', { password, options })
    }
  }
})

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
