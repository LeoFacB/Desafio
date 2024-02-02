var express = require ('express');
var mysql2 = require('mysql2');


const app = express();

const server = app.listen(3000, '0.0.0.0');

//Funcao para se conectar-se ao banco de dados
const connection= mysql2.createConnection({
    host: 'db_docker',
    port: '3306',
    user: 'mysql_u',
    password: 'senha',
    database: 'funcionarios'
})

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/funcionarios', function(req, res) {
    connection.query('SELECT * FROM info', function (error, results) {
  
      if (error) { 
        throw error
      };
  
      res.send(results.map(item => ({ Nome: item.nome })));
    });
  });
