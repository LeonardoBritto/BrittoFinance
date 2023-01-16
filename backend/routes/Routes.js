const express = require('express')
const app = express()

const FormaPagtoRoutes = require('./FormaPagtoRoutes')
const PessoaRoutes = require('./PessoaRoutes')

app.use('/formapagto', FormaPagtoRoutes)
app.use('/pessoa', PessoaRoutes)

module.exports = app