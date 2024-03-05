var servidor = require('http');
var ruta = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var parametros = 
    ruta.prase(req,url,true).query;
    res.end("ok")    
    
}).listen(8080)