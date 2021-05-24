// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Digite a altura do retângulo em cm: "))
  let largura = Number(prompt("Digite a largura do retângulo em cm: "))
  
  console.log(altura * largura)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Em que estamos?"))
  let anoNasc = Number(prompt("Em que ano você nasceu?"))

  console.log(anoAtual - anoNasc)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Escreva seu peso em KG: "))
  let altura = Number(prompt("Escreva sua altura em metros: "))

  console.log(peso / (altura * altura))

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Qual o seu nome?")
  let idade = Number(prompt("Qual a sua idade?"))
  let email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let cor1 = prompt("Qual a sua cor favorita: ")
  let cor2 = prompt("Qual a sua segunda cor mais favorita: ")
  let cor3 = prompt("Qual a sua terceira cor mais favorita: ")

  console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let string = prompt("Digite o nome de um animal: ")
  var maiusc = string.toUpperCase()
  console.log(maiusc)
  
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custoTotal = Number(prompt("Quanto custará todo o espetáculo (em reais)?"))
  let precoIngresso = Number(prompt("Quanto custará cada ingresso? "))

  console.log(custoTotal/precoIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let string1 = prompt("Digite uma palavra: ")
  let string2 = prompt("Digite outra palavra: ")
  
  let length1 = string1.length, length2 = string2.length;

  console.log(length1 == length2)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let string1 = prompt("Digite uma palavra: ")
  let string2 = prompt("Digite outra palavra: ")

  let maisc = string1.toUpperCase()
  let maisc2 = string2.toUpperCase()

  console.log(maisc == maisc2)


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNasc = Number(prompt("Qual seu ano de nascimento?"))
  let emissaoCarteira = Number(prompt("Qual o ano de emissão da carteira?"))

  let idade = anoAtual - anoNasc
  let tempCart = anoAtual - emissaoCarteira
  
  let idade1 = idade <= 20
  let idade2 = idade <= 50 && idade >=20

  console.log((idade1 && tempCart >= 5) || (idade2 && tempCart > 10) || (tempCart > 15))
  

  // console.log(((idade <= 20) && (tempCart >= 5)) || ((idade <= 50 ) && (idade >= 20) && (tempCart > 10)) || ((tempCart > 15) ))
  


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = Number(prompt("Digite um ano: "))

  let opcao1 = ano % 400 
  let opcao2 = ano % 4 
  let opcao3 = ano % 100 

  console.log((opcao1 == 0) || ((opcao2 == 0) && !(opcao3 == 0)))


  // console.log((ano % 400 == 0) || ((ano % 4 == 0) && !(ano % 100 == 0)))

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let formacao = prompt("Você possi ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade excluisva durante os horários do curso?")
  
  let idadeRes = idade.toLowerCase()
  let formacaoRes = formacao.toLowerCase()
  let disponibilidadeRes = disponibilidade.toLowerCase()

  console.log(("sim" == idadeRes) && ("sim" == formacaoRes) && ("sim" == disponibilidadeRes))
  

}