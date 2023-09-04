const express = require('express')
const app = express()

const BancoRoutes = require('./BancoRoutes')
const FormaPagtoRoutes = require('./FormaPagtoRoutes')

app.use('/banco', BancoRoutes)
app.use('/formapagto', FormaPagtoRoutes)

module.exports = app