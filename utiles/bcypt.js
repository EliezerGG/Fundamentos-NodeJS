const bcypt = require('bcrypt')

const password = '1234Segura!'

bcypt.hash(password,5,(err,hash)=>{
    console.log(hash)
    bcypt.compare(password,hash,(err,res)=>{
        console.log(res)
    })
})