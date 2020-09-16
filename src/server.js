//servidor
 const express = require("express")
 const server = express()
 
 const {
   pageLanding,
   pageStudy,
   pageGiveClasses,
   saveClasses,
   registerSuccess

} = require('./pages')  

 //configurar o nunjucks
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
    express: server,
    noCache:true,
 })

//configurar arquivos esáticos (css, script, imagens)
 server.use(express.static("public"))
 //receber dados do req.body
 .use(express.urlencoded({extended:true}))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/register-success", registerSuccess)
.post("/save-classes", saveClasses)
.listen(5500)  

