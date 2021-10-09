// Codigo del servidor o framework
const express = require('express')
const cors = require('cors')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const app = express()

// settings - configurar el server
app.set('port', process.env.PORT || 4000) // es una variable set()

// middlewares - definir algunas funciones que se ejecutaran antes que lleguen a las rutas
app.use(cors())
app.use(express.json())// ahora es posible que entienda formato json

// Routes
app.get('/', (request, response) => {
  response.send('<h1>My First API</h1>')
})
// cuando solicitemos esta url usamos otra logica de otro file
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

// manejo de errores
app.use(notFound)
// aqui se podria usar sentry

// other error
app.use(handleErrors)

module.exports = app
