// Exercício de interpretação de texto

// 1 -
/* a) Será impresso:

    Matheus Nachtergaele
    Virginia Cavedish
    Globo, 14h
*/

// b)

/* a)

Vai imprimir no console o objeto inteiro de cachorro ={ nome: "Juca", idade:3, raca: "SRD" }.
Em seguida vai imprimir os dos outro animais variando apenas o nome. Em gato, vai imprimir "Juba". E em tarturaga vai imprimir "Jubo", substituindo o "a" por "o". */

// b) A sintaxe dos 3 pontos ("...") ela copia o objeto anterior já declarado. Ela faz um espalhamento ou spread. 

// 3 - 
// a) Vai ser impreso na primeira: false. E na segunda undefined

// b) O primeiro será impresso, pois foi chamada a função "minhaFuncao", jogando o objeto pessoa e a string "backender." Dessa forma, no return foi determinado a citação por colchetes, então objeto[propriedade], substituindo dá pessoa["backender"], chamando a propriedade backender do objeto pessoa, que no caso é false. 
// Já no segundo, substituindo propriedade por altura, no objeto não tem menção a essa propriedade, por isso undefined. 

// Exercício de escrita de código

// 1 -
// a)

const pessoa = {
    nome: "Leonardo",
    apelidos: ["Mosso", "Leo", "Nardo"]
}

function imprimirNome(dado){
    console.log(`Eu sou ${dado.nome}, mas pode me chamar de ${dado.apelidos[0]}, ${dado.apelidos[1]} ou ${dado.apelidos[2]} `)
}

imprimirNome(pessoa)

// b)

const novaPessoa = {
    ...pessoa,
    apelidos:["pizza", "jogador", "seilá"]
}

imprimirNome(novaPessoa)

// 2 - a)

const objeto1 = {
    nome: "Leonardo",
    idade: 24,
    profissão: "estudante"
}

const objeto2 = {
    nome: "Paulo",
    idade: 24,
    profissão: "programador"
}

// b)

function imprimirArray(valor1, valor2) {
    console.log(array = [valor1.nome, valor1.nome.length, valor1.idade, valor1.profissão, valor1.profissão.length, valor2.nome, valor2.nome.length, valor2.idade, valor2.profissão, valor2.profissão.length ])
}

imprimirArray(objeto1, objeto2)

// 3 - 

const carrinho = []

const fruta1 = {
    fruta: "manga",
    disponibilidade: true
}

const fruta2 = {
    fruta: "goiaba",
    disponibilidade: true
}

const fruta3 = {
    fruta: "banana",
    disponibilidade: true
}

function colocarFrutaNaArray(fruta){
   carrinho.push(fruta)
}

colocarFrutaNaArray(fruta1)
colocarFrutaNaArray(fruta2)
colocarFrutaNaArray(fruta3)

console.log(carrinho)


// Desafios

// 1 - 

function perguntarInformacoes(){
    const nome = prompt("Qual o seu nome? ")
    const idade = prompt("Qual a sua idade?")
    const profissao = prompt("Qual a sua profissão?")
    const informacoesPessoais = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(informacoesPessoais)
    console.log("Tipo0", typeof informacoesPessoais)

}

perguntarInformacoes()

// 2 - 


const filme1 = {
    nome: "Toy Story",
    anoDeLançamento: 2000 
}

const filme2 = {
    nome: "Star Wars",
    anoDeLançamento: 2000
}

function filmes(movie1, movie2){
    console.log("O primeiro filme foi lançado antes do segundo?", movie1.anoDeLançamento < movie2.anoDeLançamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", movie1.anoDeLançamento <= movie2.anoDeLançamento )
}

filmes(filme1, filme2)

// 3 - 

function naoDisponibilidadeDaFruta(frutaNãoDisponivel){
    frutaNãoDisponivel.disponibilidade = false
    return frutaNãoDisponivel
}

console.log(naoDisponibilidadeDaFruta(fruta1))


