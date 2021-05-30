// Exercícios de interpretação de código


/*  
    1- 
        a. - undefined 
        b. - null
        c. - 11
        d. - 3
        e. - [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        f. - 9
*/

/* 
    2 - 
        SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

// Exercícios de escrita de código

// 1-

const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu email?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

// 2 -

// a)
const comidasFavoritas = ["Burrito", "Shimeji", "Batata-Frita", "Feijão", "Guacamole"]
console.log(comidasFavoritas)

// b)
const comidasFavoritasString = comidasFavoritas.toString()

console.log("Essas são minhas comidas favoritas", comidasFavoritasString.replaceAll(",","\n"))

// c)

const comidaUsuário = prompt("Diga sua comida favorita: ")
const novaLista = comidasFavoritasString.replaceAll("Shimeji", comidaUsuário)

console.log(novaLista.toString())

// 3 - 

const listaDeTarefas = []
listaDeTarefas.push(prompt("Insira uma tarefa que você precisa fazer hoje: "))
listaDeTarefas.push(prompt("Insira uma tarefa que você precisa fazer hoje: "))
listaDeTarefas.push(prompt("Insira uma tarefa que você precisa fazer hoje: "))

console.log(listaDeTarefas)
const tarefaRealizada = prompt(`Qual tarefa você já realizou hoje: 0- ${listaDeTarefas[0]}, 1- ${listaDeTarefas[1]}, 2- ${listaDeTarefas[2]} `)

listaDeTarefas.splice(tarefaRealizada, 1)
console.log("Após o splice", listaDeTarefas)

// Desafio
// 1-

let frase = prompt("Insira uma frase: ")
let fraseArray = frase.split(" ")
console.log(fraseArray)


// 2- 

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceAbacaxi = arrayFrutas.indexOf("Abacaxi")
console.log(`O indice de abacaxi é ${indiceAbacaxi}, o tamanho do array é ${arrayFrutas.length}`)


