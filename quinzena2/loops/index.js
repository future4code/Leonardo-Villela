// Exercícos de interpretação de código

// 1-a) O código está somando o valor de "i" a cada teste que ele faz, depois do incremento ser feito de +1. A variável "let valor" começa em 0 e a cada rodada de conferencia ela soma o valor de "i". No final, o valor final é 10. 

// 2)a) Vai ser impresso no console: 
/*   19
     21
     22
     23
     25
     27
     30
*/

// b) Sim, é suficiente. Nesse caso, dentro da ação do for..of..., poderia ser escrito console.log(lista.indexOf(numero)). Assim se teria o índice. 

// 3) Se o usúario digitar o número 4 o resultado vai ser o seguinte(Cada rodada vai imprimir uma nova linha com mais um asterisco.): 
/*            
            *
            **
            ***
            ****

*/


// Exercícios de escrita de código
// 1 - 
let quantosBichos = Number(prompt("Quantos bichos você tem?"))
let bichos = []


if(quantosBichos === 0){
    console.log("Que pena! Você pode adotar um pet!")}else {
        for (let i = 0; i < quantosBichos; i++){
        let nomeAnimais = prompt("Digite o nome dos seus animais")
        bichos.push(nomeAnimais)
    }
    }

console.log(bichos)

// 2 -

// a)

let arrayOriginal = [10, 20, 50, 33, 60, 121, 11]

for(numero of arrayOriginal){
    console.log(numero)
    console.log(`O número ${numero} divido por 10 é = `,numero / 10)
}

// b) Feito acima junto com o a)

let novaArray = []
for(numero of arrayOriginal){
    if(numero % 2 === 0){
        novaArray.push(numero)
    } 
}

console.log(novaArray)

// c) 

let ArrayString = []

for(numero of arrayOriginal){
    let string = numero.toString()
    let index = arrayOriginal.indexOf(numero).toString()
    let fraseString = `O elemento do índex ${index} é o número ${string}`
    ArrayString.push(fraseString)
}

console.log(ArrayString)

// d)

valorMáximo = 0 
valorMinimo = 11

for(numero of arrayOriginal){
    if(numero < valorMinimo){
        valorMinimo = numero
    } else if (numero > valorMáximo) {
        valorMáximo = numero
    }
}

console.log(`O maior número é ${valorMáximo} e o menor é ${valorMinimo}`)


// Desafio: 

// 1-)


const numeroCorreto = Number(prompt("Insira um número: "))
let contador = 1
console.log("Vamos jogar!")
let numeroChute = Number(prompt("Chute um número"))

while(numeroChute !== numeroCorreto){
    console.log("O número chutado foi de: ", numeroChute)
    if(numeroCorreto < numeroChute){
    console.log("Errouuuu! É menor")
    } else {
        console.log("Errouuu! É maior")
    }
    

    numeroChute = Number(prompt("Chute um número"))
    contador++
}

console.log("O número chutado foi:", numeroChute)
console.log(`Acertou, o número de tentativas foi ${contador}`)

// 2)

// const numeroCorreto = getRandomIntInclusive(0, 100)

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// console.log(numeroCorreto)



const numeroCorreto2 = parseInt(Math.random() * 100)
let contador2 = 1
console.log("Vamos jogar!")
let numeroChute2 = Number(prompt("Chute um número"))

while(numeroChute2 !== numeroCorreto2){
    console.log("O número chutado foi de: ", numeroChute2)
    if(numeroCorreto2 < numeroChute2){
    console.log("Errouuuu! É menor")
    } else {
        console.log("Errouuu! É maior")
    }
    

    numeroChute2 = Number(prompt("Chute um número"))
    contador2++
}

console.log("O número chutado foi:", numeroChute2)
console.log(`Acertou, o número de tentativas foi ${contador2}`)


 
/*A primeira forma que testei foi utilizando o math.random() * 100, dessa forma ele dá sempre um número entre 1 e 100. Já que os números eram entre 0 e 1 do math.random o vezes 100 ajuda e o "parseInt" arredonda o número. 
Mas, tentei também pela função function getRandomIntInclusive(min, max) que também mostrou os números de 1 a 100, ao menos nos inúmeros testes que fiz. 
Achei a primeira opção mais prática e fácil de lembrar, a segunda já é preciso copiar uma função pronta da página. 

*/

















