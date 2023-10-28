const express = require('express')
const app = express()

const BancoRoutes = require('./BancoRoutes')
const FormaPagtoRoutes = require('./FormaPagtoRoutes')
const UsuarioRoutes = require('./UsuarioRoutes')

app.use('/banco', BancoRoutes)
app.use('/formapagto', FormaPagtoRoutes)
app.use('/usuario', UsuarioRoutes)

module.exports = app