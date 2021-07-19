Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('\nQuadro de Honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('\nAprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('\nReprovado!')
    } else {
        console.log('\nNota inválida!')
    }

    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(0)