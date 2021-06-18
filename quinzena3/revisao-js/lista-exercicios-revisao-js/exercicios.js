// EXERCÍCIO 01
function inverteArray(array) {

  const arrayInvertido = array.map((valor, i) =>
    array[array.length - i - 1])
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  const newArray = []
  for (valor of array) {
    if (valor % 2 === 0) {
      const numeroAoQuadrado = valor * valor
      newArray.push(numeroAoQuadrado)
    }
  }

  return newArray

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  const newArray = []
  for (valor of array) {
    if (valor % 2 === 0) {
      newArray.push(valor)

    }
  }
  return newArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maior = 0

  for (let valor of array) {
    if (valor > maior) {
      maior = valor
    }
  }
  return maior

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {

  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  newArray = []

  const adicionarArray = (resposta) => {
    newArray.push(resposta)
  }

  const resposta1 = booleano1 && booleano2 && !booleano4
  adicionarArray(resposta1)

  const resposta2 = (booleano1 && booleano2) || !booleano3
  adicionarArray(resposta2)

  const resposta3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  adicionarArray(resposta3)

  const resposta4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  adicionarArray(resposta4)

  const resposta5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  adicionarArray(resposta5)

  return newArray
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  let retornarPares = []
  for(let i = 0; i < n; i++){
    retornarPares.push(i * 2)
  }

  return retornarPares

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
