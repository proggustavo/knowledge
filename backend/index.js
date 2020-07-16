const app = require('express')()
const consign = require('consign')

const db = require('./config/db')

//isso aqui é o knex, agora ele vai estar disponível no meu app
app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})