# Desafio Docker

<h4 align="center"> 
	🚧   Em construção...  🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Descricao](#Descricao)
   * [Pre-Requisitos](#Pre-Requisitos)
   * [Inicializando o Projeto](#Inicializando-o-Projeto)
      * [Docker-Compose](#Docker-Compose)
      * [Podman](#Podman)
   * [Docker-Compose](#Docker-Compose) 
   * [Docker](#Docker)
   * [Podman](#Podman)
   * [Acesso a aplicação](#Acesso-a-aplicação)
<!--te-->

## Descricao

Este é um projeto é uma aplicação web que cria uma lista de funcionários e disponibiliza. É utilizado um ambiente Docker com as tecnologia Ubuntu, Node, PHP e MySQL 

## Pre-Requisitos

Para rodas a aplicação é necessário ja ter instalado em sua máquina:

- Docker v.24.0.7
- Docker-Compose v.2.23.3

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
