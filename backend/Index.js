const express = require('express')
const cors = require('cors')
const routes = require('./routes/Routes')
const port = 5000

const app = express()

app.use(express.json())

app.use(cors({credentials: true}))

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.use(routes)

const conn = require('./db/Connection')

//Conectando
conn.sync().then(app.listen(port)).catch((err) => console.log(err)) 