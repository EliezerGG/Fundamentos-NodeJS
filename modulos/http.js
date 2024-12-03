const http = require('http')

http.createServer((req, res)=>{
    console.log('nueva peticion')
    console.log(req.url)

    switch(req.url){
        case '/hola':
            res.write('Hola, quetal')
            res.end()
            break;
        default:
            res.write('Error 404: no se que quieres')
            res.end()
    }
    res.write('hola ya se usar http de nodeJS')
    res.end()
}).listen(3000)
console.log('escuchando http en el puerto 3000')