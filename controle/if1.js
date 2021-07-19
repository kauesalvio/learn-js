function soBoaNoticia(nota){
    if(nota => 7) {
        console.log("Boa nota!: " + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(9)

function seForTrue(valor) {
    if(valor) {
        console.log("É verdade!: " + valor)
    }
}

seForTrue()
seForTrue(null)
seForTrue(undefined)
seForTrue(1)