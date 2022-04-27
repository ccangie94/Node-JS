const express = require('express');
const { acceptsLanguages } = require('express/lib/request');
const app = express()

let id
let name;
let lastname;
let age;


app.use(express.json());

app.post('/', function(request, response){
  id= request.body.id
  name = request.body.name
  lastname = request.body.lastname
  age = request.body.old
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/name', function (req, res) {
  res.send(name);
  console.log(name);
})

app.get('/lastname', function (req, res) {
  res.send(lastname);
})

app.get('/age', function (req, res) {
  res.send(27);
})

app.listen(3000)