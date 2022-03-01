let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num} `)

num[5] = 6 //acrescenta um numero
num.push(7) // acrescenta na ultima casa
num.length // mostra o tamanho da array 
num.sort()  // ordena em ordem crescente

console.log(`o tamanho do vetor é ${num.length}`)

console.log(`o vetor é ${num}`)


for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} te o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}
console.log(' ')

console.log(num.indexOf(0))
console.log(num.indexOf(6))

num[10]

let pos = num.indexOf(10)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posiçãO ${pos}`)
}
