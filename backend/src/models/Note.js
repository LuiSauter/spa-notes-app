const { Schema, model } = require('mongoose') // mongoose

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      require: true
    },
    author: String,
    date: {
      type: Date,
      default: new Date()
    }
  }, {
    timestamps: true // en esta caso mongoose agrea fecha automaticamente
  })

module.exports = model('Note', noteSchema)
