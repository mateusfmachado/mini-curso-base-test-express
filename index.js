const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

// setup
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routes
app.get('/', (req,res) => res.send({ ok: true }))
app.post('/', (req,res) => res.send({ ok: req.body.test }))
app.use('*', (req,res) => res.send({ statusCode: 404, error: "Não encontrado" }))

//run
app.listen(3000, () => console.log('Rodando em http://localhost:3000'))