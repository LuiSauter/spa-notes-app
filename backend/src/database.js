// Codigo de la coneccion a la base de datos
const mongoose = require('mongoose')
const { MONGO_DB_URI, MONGO_DB_URI_TEST } = process.env
// le decimos que cree una base datos mongodb
const connectionString = MONGO_DB_URI || MONGO_DB_URI_TEST

// cuando la coneccion sea abierta ejecute algo por consola
mongoose.connect(connectionString).then(() => {
  console.log('DB is connected')
}).catch(err => console.log(err))

// por si se rompe algo quitamos la coneccion para que no quede zombie
process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
