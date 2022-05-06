const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'b3ttqolofog2rmjwgjdi-mysql.services.clever-cloud.com',
  user:'u5khocd5lhtsx2p0',
  password:'P3OIVsICa1lhH0p5sGc3',
  database:'b3ttqolofog2rmjwgjdi'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `Proveedor`', function (error,results, fields) {
      if (error) throw error;
    console.log('the solution is: ', results);
  });
  connection.end()
})

app.listen(3000)