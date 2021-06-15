// Exercícios de interpretação de código 

/*   
1) a) Será impresso no console cada um dos objetos do array usuários, o seu index correspondente e depois imprimirá o array inteiro. Portando, ficará da seguinte forma:

{nome: "Amanda Rangel, apelido: "Mandi"} 0, Array inteiro usuários: {}
{ nome: "Laís Petra", apelido: "Laura" } 1, Array inteiro usuários: {}
 { nome: "Letícia Chijo", apelido: "Chijo" } 2, array inteiro usuários: {}


 2) a) Será impresso os 3 nomes presentes na array "usuarios", formando, assim, uma nova array. 

 {"Amanda Rangel", "Laís Petra", "Letícia Chijo"}

3) a) Vai filtrar os dados que tem não tem o apelido "Chijo", excluindo somente este. Ficará da seguinte forma:

{ nome: "Amanda Rangel", apelido: "Mandi" }
{ nome: "Laís Petra", apelido: "Laura" }

*/

// Exercícios de escrita de código

// 1) a)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const nomesDogs = pets.map((inputNome) => {return `${inputNome.nome}`})

console.log(nomesDogs)

// b) 

const cachorrosSalsichas = pets.filter((inputRaca) => {return inputRaca.raca === "Salsicha"})

console.log(cachorrosSalsichas)

// c) 

const selecionarPoodles = (inputPoodles) => {return inputPoodles.raca === "Poodle"}
const dogsPoodles = pets.filter(selecionarPoodles)

const descontoParaPoodles = dogsPoodles.map((dog) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}! `
})

console.log(descontoParaPoodles)

// 2) a)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomesProdutos = produtos.map((indexNome) => {
     return indexNome.nome
 })

 console.log(nomesProdutos)

//  b)

 const produtosComDesconto = produtos.map((produto) => {
     const novoPreco = (produto.preco * 0.95).toFixed(2)
     return `${produto.nome}  ${novoPreco}`
 })

 console.log(produtosComDesconto)

//  c)

const produtosBebidas = (indexBebida) => {
    return indexBebida.categoria === "Bebidas"
}

const novaArrayBebidas = produtos.filter(produtosBebidas)
console.log(novaArrayBebidas)

// d)

const produtosYpês = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

console.log(produtosYpês)

// e)

const frasesYpes = produtosYpês.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(frasesYpes)