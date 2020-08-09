// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    
})


//Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estáticos (css, scripts, imagens)

server.use(express.static("public"))

//Rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses
.post("/save-classes", saveClasses)

//start do servidor
.listen(5500)