const os = require('os')

console.log(os.arch())
console.log(os.platform())

console.log(os.cpus().length)

console.log(os.constants)

console.log(os.freemem())
function gb(bytes){return mb(bytes)/SIZE}
console.log(gb)