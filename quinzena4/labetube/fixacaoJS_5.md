```

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    
    
    function retornarNomes(item){
      return `${item.nome}`
    }
    const arrayNomes = animais.map(retornarNomes)
    return arrayNomes

}

```