const fs = require('fs')

const leer = (ruta,cb)=>{
    fs.readFile(ruta,(err, data)=>{
        //Leido
        console.log(data.toString())
    })
}

leer(__dirname + '/texto.txt')

const escribir = (ruta, contenido,cb) =>{
    fs.writeFile(ruta, contenido, (err)=>{
        if (err){
            console.log('No he podido escribirlo',err)
        }else{
            console.log('Se ha escrito correctamente')
        }
    })
}

escribir(__dirname+"/archivo1.txt", 'Soy un archivo nuevo', console.log)

const borrar = (ruta,cb)=>{
    fs.unlink(ruta, cb)
}

borrar(__dirname+'/archivo1.txt', console.log)