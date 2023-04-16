const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],

  title: {
    type: String
  },

  icon: {
    type: String
  },

  describe: {
    type: String
  },

  body: {
    type: String
  },

  stuff: {
    likes: {
      nums: {type: Number,default: 0},
      users: [{type: mongoose.SchemaTypes.ObjectId,ref: 'User'}]
    },
    views: {
      nums: {type: Number,default: 0},
      users: [{type: mongoose.SchemaTypes.ObjectId,ref: 'User'}]
    },
    collections: {
      nums: {type: Number,default: 0},
      users: [{type: mongoose.SchemaTypes.ObjectId,ref: 'User'}]
    }
  },
  

}, {
  timestamps: true
})

module.exports = mongoose.model('Article', schema)