const express = require('express')
const app = express()

const BancoRoutes           = require('./BancoRoutes')
const CategoriaRoutes       = require('./CategoriaRoutes')
const EstabelecimentoRoutes = require('./EstabelecimentoRoutes')
const FormaPagtoRoutes      = require('./FormaPagtoRoutes')
const LancamentoRoutes      = require('./LancamentoRoutes')
const UsuarioRoutes         = require('./UsuarioRoutes')

app.use('/banco',           BancoRoutes)
app.use('/categoria',       CategoriaRoutes)
app.use('/estabelecimento', EstabelecimentoRoutes)
app.use('/formapagto',      FormaPagtoRoutes)
app.use('/lancamento',      LancamentoRoutes)
app.use('/usuario',         UsuarioRoutes)

module.exports = app