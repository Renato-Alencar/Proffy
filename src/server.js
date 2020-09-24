//Servidor
const express = require('express')
const server = express()

const {
    pageLanding, 
    pageStudy, 
    pageGiveClasses,
    saveClasses 
} = require("./pages")

//configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Início da configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas de aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//Start do Servidor
.listen(5500) 