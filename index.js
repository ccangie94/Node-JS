const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Español', function (req, res) {
    res.send('Hola mundo')
  })

  app.get('/Portugues', function (req, res) {
    res.send('Olá mundo')
  })

app.listen(3000)