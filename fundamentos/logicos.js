function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTvDe50 = trabalho1 && trabalho2
    // const comprarTvDe32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return { 
        comprarSorvete: comprarSorvete, 
        comprarTvDe50: comprarTvDe50, 
        comprarTv32: comprarTv32, 
        manterSaudavel: manterSaudavel
    }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))