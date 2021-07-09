const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 5.987
const avaliacao2 = 6.723

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString(2))
console.log(typeof media)

console.log(7 / 0) // result = infinity
console.log("10" / 2) // result = 5
console.log("Teste" * 2) // result = NaN