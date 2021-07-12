// Armazendo uma funcao numa variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando função arrow em uma variavel
const Soma = (a, b) =>{
    return a + b
}

console.log(Soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a)

imprimir2(1)
