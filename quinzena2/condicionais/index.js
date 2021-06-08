// Exercícios de interpretação de código

// 1-)

// a-) O código divide o número digitado pelo usuário e vê se a sobra da divisão é igual a zero em valor e tipo. 

// b-) Ele imprime "Passou no teste" para os números pares, pois esses divindio por 2 sempre dão resto 0. 

// c-) Já para os números impares a impressão é "Não passou no testes", pois a divisão não sobra 0. 

// 2 - 

// a-) O código acima serve para comparar se o que o usúario digitou no prompt é igual a fruta dentro do switch. O programa procura comparar as duas palavras para achar a que combine e imprimir quando as duas palavras combinarem em tipo e valor. 

// b-) Se for "Maça" a mensagem impressa será: 
//  "O preço da fruta, maçã, é R$ 2.25

// c-) Se retirássemos o break, seria impresso no console.log "Perâ, valor de R$ 5 reais". Pegaria o valor do default, e não sairia o preço real da pêra que é de R$ 5.5. 

// 3-)

// a-) A primeira linha está recebendo um número do usúario como string e convertendo para o tipo Number. 

// b) Se o usúrio digitar "10" a mensagem será "Esse número passou no teste", já que o número "10" é maior que "0". Agora, se o usúario digitar "-10" dará erro no programa e não aparecerá nada, já que na condição foi colocado como condição "numero > 0". 

// c) Sim, haverá erro n oconsole. Pois, o "let mensagem" está em um bloco do escopo local do "if". E o console.log está no escopo global, dessa forma o "let mensagem" fica restrito ao que acontece dentro do "if". Só seria impressa a "let mensagem" caso o console.log estive dentro do "if."

// Exercícios de escrita de código. 

// 1 - 

//  a-) 

const idadeUsuário = Number(prompt("Qual a sua idade?"))

if (idadeUsuário >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// b-)

const horarioDeEstudo = prompt("Qual horário você estuda? Digite a letra correspondente nos parênteses:  \n Matutino (M) \n Vespertino (V) \n Noturno(N)")

if (horarioDeEstudo.toUpperCase() === "M") {
    console.log("Bom Dia!") 
} else if (horarioDeEstudo.toUpperCase() === "V"){
    console.log("Boa Tarde!") 
} else if (horarioDeEstudo.toUpperCase() === "N") {
    console.log("Noturno")
} else {
    console.log("Verifique sua resposta e digite novamente.")
}


// 3-)

const horarioDeEstudo2 = prompt("Qual horário você estuda? Digite a letra correspondente nos parênteses:  \n Matutino (M) \n Vespertino (V) \n Noturno(N)")

switch (horarioDeEstudo2.toUpperCase()){
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
    default: 
        console.log("Verifique sua resposta e digite novamente")
        break     
}

// 4-)

const generoFilme = prompt("Qual o gênero do filme que vamos assistir? ")
const precoIngresso = prompt("Qual o valor do ingresso em reais(R$) para esse filme: ")

if (generoFilme.toUpperCase() === "FANTASIA" && precoIngresso < 15) {
    console.log("Bom Filme")
} else {
    console.log("Escolha outro filme.")
}

// Desafios 

// // 1-) 

const generoFilme2 = prompt("Qual o gênero do filme que vamos assistir? ")
const precoIngresso2 = prompt("Qual o valor do ingresso em reais(R$) para esse filme: ")

if (generoFilme2.toUpperCase() === "FANTASIA" && precoIngresso2 < 15) {
    const lanchinho= prompt("Qual snack que você quer comer? ")
    console.log("Bom Filme")
    console.log(`Aproveite o seu ${lanchinho}`)

} else {
    console.log("Escolha outro filme :(")
}

// 2-)

const nomeCompleto = prompt("Digite seu nome completo: ")
const tipoDeJogo = prompt("Digite IN (para jogor internacionais) e DO (para jogos nacionais.) ")
const etapaJogo = prompt("Qual a etapa do jogo desejada. Digite: \n SF para semi-finais \n DT para decisão de 3ºlugar \n FI - para Final")
const categoria = prompt("Digite a opção de categoria desejada: 1, 2, 3 ou 4.")
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos: "))


let fase = ""
if (etapaJogo.toUpperCase() === "SF"){
    fase = "Semifinais"
} else if (etapaJogo.toUpperCase() === "DT") {
    fase = "Decisão 3ºLugar"
} else if (etapaJogo.toUpperCase() === "FI") {
    fase = "Final"
} else {
    fase =" Confira sua resposta "
}

let texto = ""
if(tipoDeJogo.toUpperCase() === "IN"){
    texto = "Internacional"
} else {
    texto = "Nacional"
}

function calcularValor(){
    if(((etapaJogo.toUpperCase() === "SF" && categoria === "1") || (etapaJogo.toUpperCase() === "FI" && categoria === "2") )){
        return valor2  

    } else if (((etapaJogo.toUpperCase() === "SF" && categoria === "2") || (etapaJogo.toUpperCase() === "FI" && categoria === "3") )) {
        return valor3 
    } else if ((etapaJogo.toUpperCase() === "SF" && categoria === "3")) {
        return valor5
    } else if ((etapaJogo.toUpperCase() === "SF" && categoria === "4")) {
        return valor8
    } else if ((etapaJogo.toUpperCase() === "DT" && categoria === "1")){
        return valor4
    } else if ((etapaJogo.toUpperCase() === "DT" && categoria === "2")){
        return valor6
    } else if ((etapaJogo.toUpperCase() === "DT" && categoria === "3") || (etapaJogo.toUpperCase() === "FI" && categoria === "4")) {
        return valor7
    } else if ((etapaJogo.toUpperCase() === "DT" && categoria === "4")) {
        return valor9

    } else if ((etapaJogo.toUpperCase() === "FI" && categoria === "1")) {
        return valor1
    }
}

const valor1 = 1980
const valor2 = 1320
const valor3 = 880 
const valor4 = 660
const valor5 = 550
const valor6 = 440
const valor7 = 330
const valor8 = 220
const valor9 = 170

function valorIngresso(){
    var precoIngresso
if(tipoDeJogo.toUpperCase() === "DO" ) {
    var precoIngresso = calcularValor()
    return precoIngresso
} else if (tipoDeJogo.toUpperCase() === "IN") {
    var precoIngresso = calcularValor() / 4.10
    return precoIngresso

}
}

console.log("---Dados da compra---")
console.log("Nome do Cliente:", nomeCompleto)
console.log("Tipo de jogo", texto)
console.log("Etapa do Jogo:", fase)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos", quantidadeIngressos)
console.log("---Valores---")
if(tipoDeJogo.toUpperCase() === "DO") {
    console.log("O valor do ingresso é R$", valorIngresso())
    console.log("Valor Total é R$", valorIngresso() * quantidadeIngressos) 
} else if(tipoDeJogo.toUpperCase() === "IN") {
    console.log("O valor do ingresso é U$", valorIngresso())
    console.log("Valor Total é U$", valorIngresso() * quantidadeIngressos) 
}






