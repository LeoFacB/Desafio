var express = require ('express');
var mysql2 = require('mysql2/promise');
require('dotenv').config();


const app = express();
const server = app.listen(3000, '0.0.0.0');

//Funcao para se conectar-se ao banco de dados
const connection = () => mysql2.createConnection({
    host: 'db_docker',
    port: '3306',
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'funcionarios'
})

app.get('/', function (req, res) {
  res.send('Pagina pronta')
})

app.get('/funcionarios', async function(req, res) {
    
  let con = await connection()
  con.query('SELECT * FROM info').then((resultados)=> {
      res.send(resultados[0])
      console.log(resultados)
    })})
