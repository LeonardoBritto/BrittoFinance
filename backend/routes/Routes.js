const express = require('express')
const app = express()

const CategoriaRoutes       = require('./CategoriaRoutes')
const EstabelecimentoRoutes = require('./EstabelecimentoRoutes')
const LancamentoRoutes      = require('./LancamentoRoutes')
const UsuarioRoutes         = require('./UsuarioRoutes')

app.use('/categoria',       CategoriaRoutes)
app.use('/estabelecimento', EstabelecimentoRoutes)
app.use('/lancamento',      LancamentoRoutes)
app.use('/usuario',         UsuarioRoutes)

module.exports = app