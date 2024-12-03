function asincrona(callback){
    setTimeout(()=>{
        try {
            let a = 3+z
            callback(null,a)
        }
        catch (e) {
            console.error(e)
            callback(e)
        }
    },1000)
}
asincrona((err,dato)=>{
    if (err){
        console.error('ternemos un error', err)
        return false
    }
    console.log('todoa ha salido bien ', dato)
})