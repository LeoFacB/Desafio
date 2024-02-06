# Desafio Docker

<h4 align="center"> 
	🚧   Em construção...  🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Descrição](#Descrição)
   * [Pré-Requisitos](#Pré-Requisitos)
   * [Criando o .env](#Criando-o-.env)
   * [Inicializando o Projeto](#Inicializando-o-Projeto)
      * [Docker-Compose](#Docker-Compose)
      * [Podman](#Podman) 
   * [Acesso a aplicação](#Acesso-a-aplicação)
<!--te-->

## Descrição

Este é um projeto é uma aplicação web que cria uma lista de funcionários e disponibiliza. É utilizado um ambiente Docker com as tecnologia Ubuntu, Node, PHP e MySQL 

```mermaid
     graph LR;
         DB/MYSQL-->API/NODE;
         API/NODE-->WEB/PHP;
   ```

## Pré-Requisitos

Para rodas a aplicação é necessário ja ter instalado em sua máquina:

- Docker v.24.0.7
- Docker-Compose v.2.23.3


## Criando o .env

Para a aplicação funcionar é necessário um arquivo .env na raiz do projeto como demonstrado:
``` shell

$ tree
.
├── api
│   ├── database
│   │   └── script.sql
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       └── index.js
├── docker-compose.yml
├── .env    <------------------------
└── website
    ├── Dockerfile
    └── index.php
```

O arquivo .env deve ter o seguinte codigo:
```
MYSQL_ROOT_PASSWORD=<senha_root>
MYSQL_USER=<usuario>
MYSQL_PASSWORD=<senha_uuario>
MYSQL_DATABASE=<database>
```


## Inicializando o Projeto

### Docker-Compose

1- Abra o arquivo e no o terminal após tudo instalado e digite:
```
cd desafiodocker
```
2-Ao entrar na pasta "desafiodocker" digite o seguinte comando:
```
docker-compose up
```
3- Verifique se foi levantado todos os contênieres com:
```
docker ls
```
O resultado esperado deve ser parecido com:
```
CONTAINER ID   IMAGE                   COMMAND                  CREATED             STATUS            
aa281cd8bae6   desafiodocker-website   "docker-php-entrypoi…"   About an hour ago   Up 59 minutes     
f8d6c0099217   desafiodocker-api       "docker-entrypoint.s…"   About an hour ago   Up 59 minutes     
a357603b8056   mysql:5.7.44            "docker-entrypoint.s…"   About an hour ago   Up About an hour   
```

### Podman



## Acesso a aplicação

Com tudo pronto e rodando pode se acessar a aplicação digitando em qualquer navegador: 

API
```
http://localhost:3000/funcionarios
```
PHP
```
http://localhost:8080
```
