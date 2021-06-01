// Exercícios de interpretação de código

// a) Será impresso no console os valores 10 e 50, sendo um embaixo do outro. 

// b) No caso de apagar o console.log não aparecerá nada no console, mesmo que a função seja invocada. 

//  a) Essa função compara se determinado texto digitado pelo usuário contêm a palavra "cenoura". Ela dá a resposta em boolean, retornando a resposta no console como "True" ou "False".

// b) True
//    True
//    True

// Exercícios de escrita de código

// 1 -
// a)

function imprimirFrase(){
    console.log("Meu nome é Leonardo, tenho 24 anos, moro em Paulínia e não sou estudante.")
}

imprimirFrase()

// b)
function fraseComParametros(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)

}

const nomeDaPessoa = "Leonardo"
const idadeDaPessoa = 24
const cidadeDaPessoa = "Paulínia"
const profissaoDaPessoa = "Professor"

fraseComParametros(nomeDaPessoa, idadeDaPessoa, cidadeDaPessoa, profissaoDaPessoa)

// 2 - 
// a)

function calcularSoma(num1, num2){
    const soma = num1 + num2
    return soma
}

console.log("A soma dos números é " + calcularSoma(5, 10))

function imprimirMaior(number1, number2){
    const maior = number1 >= number2
    return maior
}

console.log("O número 1 é maior ou igual que o número 2 é", imprimirMaior(4,4))

// c)

function ImprimirPar(numero){
  const numeroPar = numero % 2 == 0 
  return numeroPar
}

console.log("O seguinte número é par: " + ImprimirPar(Number(prompt("Digite um número para saber se é par: " ))))

// d) 

function determinarTamanho(frase){
    console.log("Tamanho da frase é", frase.length, "-", frase.toUpperCase())
}

const fraseTamanho = determinarTamanho("O rei de roma é romano")

// 3 -

function fazerSoma(num1, num2){
    const soma = num1 + num2
    console.log("Soma é", soma)
}

function fazerSubtração(num1, num2){
    const subtração = num1 - num2
    console.log("Subtração é", subtração)
}

function fazerMultiplicação(num1, num2){
    const multiplicação = num1 * num2
    console.log("Multiplicação é ", multiplicação)
}

function fazerDivisão(num1, num2){
    const divisão = num1 / num2
    console.log("Divisão", divisão)
}

const numero1 = Number(prompt("Insira um número: "))
const numero2 = Number(prompt("Insira outro número: "))

fazerSoma(numero1, numero2)
fazerSubtração(numero1, numero2)
fazerMultiplicação(numero1, numero2)
fazerDivisão(numero1, numero2)

// Desafio

// 1 - 

// a)

const imprimirNumero = (num) => {
    console.log("O número é ", num)
}

imprimirNumero(4)

// b)

const somaNumeros = (num1, num2) => {
    const soma = num1 + num2
    imprimirNumero(soma)
}

somaNumeros(2, 8)


// 2 - 

function calcularHipotenusa(catetoA, catetoB){
    // hip =  √(a² + b²)
    h = (catetoA ** 2) + (catetoB ** 2)
    const hip = Math.sqrt(h)
    return hip

}

console.log("O valor da hipotenusa é  " + calcularHipotenusa(6, 8))





