// let buffer = Buffer.alloc(1)

// let buffer = Buffer.from([1,2,3])
let buffer = Buffer.from("hola")
// console.log(buffer)

// abecedario

let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; // 97 es el código ASCII de 'a'
}
console.log(abc.toString()); // Imprime: abcdefghijklmnopqrstuvwxyz

