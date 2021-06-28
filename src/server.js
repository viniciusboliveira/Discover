const express = require('express')
const route = require('./route')
const path = require('path')
/*path é o caminho do projeto no computador*/

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))
/*join está juntando o projeto através do path até a pasta views usando o dirname*/

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))