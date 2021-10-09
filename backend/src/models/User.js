const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true, // Esto limpia los expacios en blanco
      unique: true // indica que no debe repetirse en nuestra db
    }
  }, {
    timestamps: true
  }
)

// userSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// Crea la coleccion de datos en mongodb
module.exports = model('User', userSchema)
