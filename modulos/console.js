console.log('Algo')
console.info()
console.error('error')
console.warn('Warning')

let tabla = [
    {
        a:1,
        b:'z'
    },
    {
        c:2,
        d:'X'
    }
]

console.table(tabla)
console.group('Conversacion')
console.log('Hola')
console.log('hablar')
console.log('Adios')
console.groupEnd('Conversacion')