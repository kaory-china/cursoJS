let num = [5, 8, 2, 9, 3]

/*
// acrescentar valores
// em determinado indice
num[3] = 6

// apos ultimo 
num.push(8)
console.log(num)

console.log(num.length)

// length é atributo, nao metodo por isso nao vai os ()

console.log(num.sort())

let c = 0
while (c < num.length) {
    console.log(num[c])
    c++
}
for (let pos = 0; pos < num.length ; pos++) {
    console.log(`A posição ${pos} tem o valor de ${num[pos]}.`)
}
*/
// mais simplificado

for (let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(8))

