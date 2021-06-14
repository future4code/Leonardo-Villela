/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let começarJogo = confirm("Bem vindo ao jogo de Blackjack. Quer começar o jogo?")

while(começarJogo){
let pontuacaoUsuario
let pontuacaoComputador

let cartaUsuario
let cartaUsuario2
let cartasCompradasUsuario = []

let cartaComputador
let cartaComputador2
let cartasCompradasComputador = []

if (começarJogo) {
   cartaUsuario = comprarCarta()
   cartaUsuario2 = comprarCarta()

   cartaComputador = comprarCarta()
   cartaComputador2 = comprarCarta()

   while ((cartaUsuario.valor === 11 && cartaUsuario2.valor === 11) || (cartaComputador === 11 && cartaComputador2 === 11)) {
      cartaUsuario = comprarCarta()
      cartaUsuario2 = comprarCarta()

      cartaComputador = comprarCarta()
      cartaComputador2 = comprarCarta()
   }

   pontuacaoUsuario = cartaUsuario.valor + cartaUsuario2.valor

   pontuacaoComputador = cartaComputador.valor + cartaComputador2.valor

} else {
   console.log("O jogo acabou!!!")

}

let fraseFinal = `Suas cartas são ${cartaUsuario.texto}, ${cartaUsuario2.texto}`

function montarFrase(texto) {

   fraseFinal = fraseFinal + "  " + texto
   return fraseFinal
}

function vencedor() {
   if (pontuacaoUsuario > 21) {
      return "O computador ganhou"
   } else if (pontuacaoComputador > 21 && pontuacaoUsuario <= 21) {
      return `O usuário ganhou`
   } else if ((pontuacaoComputador < 21 && pontuacaoUsuario < 21) && (pontuacaoComputador > pontuacaoUsuario)) {
      return "O computador ganhou"
   } else if ((pontuacaoComputador < 21 && pontuacaoUsuario < 21) && (pontuacaoUsuario > pontuacaoComputador)) {
      return "O usúario ganhou"
   } else {
      return "Empatou"
   }

}

let novaCarta = confirm(`Suas cartas são ${cartaUsuario.texto} e ${cartaUsuario2.texto}. A carta revelado do computador é ${cartaComputador.texto}. \n Deseja comprar mais uma carta? `)


for (let i = 0; cartasCompradasUsuario.length + 1 > i; i++) {
   if (novaCarta === true && pontuacaoUsuario <= 21) {
      cartasCompradasUsuario.push(comprarCarta())
      pontuacaoUsuario = pontuacaoUsuario + cartasCompradasUsuario[i].valor
      novaCarta = confirm(montarFrase(cartasCompradasUsuario[i].texto) + `. A carta revelada do computador é ${cartaComputador.texto}. \n Deseja comprar mais uma carta?`)
   } else {
      i++
   }
}


let fraseFinalComputador = `As cartas do computador são ${cartaComputador.texto}, ${cartaComputador2.texto}`

function colocarCartasComputador(texto) {
   fraseFinalComputador = fraseFinalComputador + "  " + texto

   return fraseFinalComputador

}

for (let i = 0; cartasCompradasComputador.length + 1 > i; i++) {
   if (pontuacaoComputador < pontuacaoUsuario && pontuacaoUsuario <= 21) {
      cartasCompradasComputador.push(comprarCarta())
      pontuacaoComputador = pontuacaoComputador + cartasCompradasComputador[i].valor
      fraseFinal2 = colocarCartasComputador(cartasCompradasComputador[i].texto)
   } else {
      i++
   }
}

alert(`${fraseFinal}. Sua pontuação é ${pontuacaoUsuario}\n ${fraseFinalComputador}. Pontuação do computador é ${pontuacaoComputador} \n ${vencedor()}`)

começarJogo = confirm("Quer recomeçar o jogo?")
}









