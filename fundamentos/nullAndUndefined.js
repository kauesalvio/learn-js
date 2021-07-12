let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString()) // não há como acessar uma variavel nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
// delete prouto.preco // para nular uma variavel
console.log(produto)

produto.preco = null // sem preco
console.log(produto)