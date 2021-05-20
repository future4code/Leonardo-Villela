/* Exercícios de interpretação de código

1 - Será impresso no console
    10
    10 5

2 - Será impresso:
    10 10 10

3- Nomes melhores para as variáveis: 
    let horasTrabPorDia = prompt("Quantas horas você trabalha por dia?")
    let salarioDiario = prompt("Quantos você recebe por dia?")
    alert(`Voce recebe ${salarioDiaria/horasTrabPorDia} por hora`) */

// Exercício de escrita do código
// Exercício 1

let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)

// Foi impresso "undefined", pois não há nada definido ainda. Nada foi colocado na variável nome e nem na idade. 

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)

// As variáveis impressas foram do tipo "string". Já que o default do JS recebe as respostas como string, ou seja, como texto. 

console.log("Olá", nome, ", você tem", idade, "anos")

// Exercício 2

let perguntaComer = prompt("Você já comeu hoje?")
let perguntaEstudar = prompt("Você já estudou hoje?")
let perguntaBanho = prompt("Você já tomou banho hoje?")

let resComer = perguntaComer
let resEstudar = perguntaEstudar
let resBanho = perguntaBanho

console.log("Você já comeu hoje? - ", resComer)
console.log("Você já estudou hoje? - ", resEstudar)
console.log("Você já tomou banho hoje? - ", resBanho)

// Exercício 3

let a = 10 
let b = 25
let c
c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio:

let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro numero:"))

let resSoma = numero1 + numero2
let resMultiplicação = numero1 * numero2

console.log("1.O primeiro número somado ao segundo número resulta em:", resSoma)
console.log("2.O primeiro número multiplicado pelo segudo número resulta em:", resMultiplicação)

