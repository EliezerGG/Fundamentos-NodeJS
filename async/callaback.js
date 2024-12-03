function hola(nombre, mycallback){
    setTimeout(()=> {
        console.log(`Hola ${nombre}`)
        mycallback()
},1000);
}

function adios(nombre, otroCallback){
    setTimeout(()=>{
        console.log(`adios`, nombre)
        otroCallback()
    },1000)
}

console.log('iniciando proceso..')
hola("Eli",()=>{
    adios('Eli', ()=>{
        console.log('Terminando proceso')})
})

