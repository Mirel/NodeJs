var servidor = require('http');
var ruta = require('url');
var procesador = require('querystring')

servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});

   switch(req.url){
        case "/":
            res.write(`
                       <form action="/procesa method="POST" enctype="application/x-www-formm-urlencoded">
                           <input type="text" name="nombre">
                           <input type="text" name="asunto">
                           <input type="text" name="email">
                           <textarea name="mensaje"></textarea><br>
                           <input type="submit">
                       </form>
            `)
        case "/procesa":
           let datos = '';
           req.on('data',parte=>{
               datos += parte.toString();
           })
           req.on('end',()=>{
               var cadena = datos
               var procesado = procesador.parse(cadena)
               console.log(procesado)
           })
            break;
   }
   res.end("")
    
}).listen(8080)