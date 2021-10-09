require('dotenv').config()
// arrancar servidor
const app = require('./app')
require('./database')// no necesita ser importado solo se ejecutara la db

const main = async () => {
  await app.listen(app.get('port'))// obtenemos el valor 4000
  console.log('server on port', app.get('port'))
}

main()
