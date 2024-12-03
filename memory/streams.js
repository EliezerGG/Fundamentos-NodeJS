const fs = require('fs');

// Crear un stream de lectura desde un archivo
const readStream = fs.createReadStream('input.txt', 'utf8');

// Crear un stream de escritura hacia un archivo
const writeStream = fs.createWriteStream('output.txt');

// Leer datos del stream de lectura y escribirlos en el stream de escritura
readStream.on('data', function(chunk) {
    console.log('Nuevo chunk recibido:', chunk);
    writeStream.write(chunk);
});

// Manejar el evento de finalización del stream de lectura
readStream.on('end', function() {
    console.log('Lectura completada.');
    writeStream.end();
});

// Manejar errores en el stream de lectura
readStream.on('error', function(err) {
    console.log('Error en el stream de lectura:', err);
});

// Manejar errores en el stream de escritura
writeStream.on('error', function(err) {
    console.log('Error en el stream de escritura:', err);
});