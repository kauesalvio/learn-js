const escola = "Cod3r"

console.log(escola.charAt(4)) // letra do indice 4 // result = R
console.log(escola.charAt(5)) // result = null
console.log(escola.charCodeAt(3)) // valor da tabela ascii no indice 3 // result = 51
console.log(escola.indexOf('3')) // indice onde se encotra o valor 3 // result = 3

console.log(escola.substring(1))
// substring tem como primeiro parametro o indice aonde começa a leitura do valor // result = od3r 

console.log(escola.substring(0, 3)) 
// o primeiro parametro é o indice onde começa a leitura string, 
// e o segundo é quantos caracteres em diante ele vai ler no const // result = Cod

console.log("Escola :".concat(escola).concat("!")) 
// função de concatenar a string // result "Escola :Cod3r!"
// pode ser usado para concatenar o +

console.log(escola.replace(3, "e")) 
// a função replace reposiciona no indice declarado no primeiro parametro
// a letra ou numero declarado no segundo parametro

console.log("A, B, C, D".split(","))
// função split converte uma string por um array, depois de selecionar o limitador
// no parametro



