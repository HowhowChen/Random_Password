const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passwordSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})

module.exports =  mongoose.model('Password', passwordSchema)