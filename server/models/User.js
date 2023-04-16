const mongoose = require("mongoose")
const schema = new mongoose.Schema({
  nickName: {
    type: String,
  },
  email: {
    type: String
  },
  url: {
    type: String
  },
  avatarImg: {
    type: String
  },
  opretor:{
    likes:[{type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category'}],
    views:[{type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category'}],
    collections:[{type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category'}],
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('User', schema)