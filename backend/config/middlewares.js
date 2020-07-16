const bodyParser = require('body-parser')
const cors = require('cors')


// esse app é a instância do express
// esse padrão está sendo utilizado devido ao consign
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())

}