const express = require('express')
const app = express()

const BancoRoutes = require('./BancoRoutes')

app.use('/banco', BancoRoutes)

module.exports = app