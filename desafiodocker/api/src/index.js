var express = require ('express');
var mysql = require('mysql2');


const app = express();

const server = app.listen(3306, '0.0.0.0');

//Funcao para se conectar-se ao banco de dados
const connection= mysql.createConnection({
    host: 'host.docker.internal',
    root: 3306,
    user: 'usuario',
    password: 'teste',
    database: 'funcionarios'
})

connection.connect()

app.get('/funcionarios', function(req, res) {
    connection.query('SELECT * FROM info', function (error, results) {
  
      if (error) { 
        throw error
      };
  
      res.send(results.map(item => ({ Nome: item.nome })));
    });
  });
