const otraFuncion = ()=>{
     seRompe()
}


const seRompe = ()=>{
    return 3 +z;
}

try {
    seRompe()
}catch (e) {
    console.log('ha fallado algo')
    console.error('Error',e)
    console.log('no te preocupes lo hemos capturado')
}

console.log('final')