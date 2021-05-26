// Exercícios de interpretação de código

// 1 -

// "a. ", false
// "b. ", false
// "c. ", true
// "d. ", boolean

// 2 - 

//  O código não está transformando a string em número, dessa forma será impresso no console os números que ele digitou e não será feito a soma. Exemplo: Se ele digitar "20" e "30" será impresso no console "2030".

// 3 - 
    /* Uma solução possível é adicionando "Number" antes do prompt, assim o número adicionado como string, já será transformado em numeral. Ex.: Number(prompt("Digite um núemero!"))*/

// ______________________________________________________
// Exercíco de escrita de código:

// Exercício 1:

let idadeSua = Number(prompt("Qual a sua idade? "))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

let comparandoIdades = idadeSua > idadeMelhorAmigo
let diferençaIdades = idadeSua - idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu amigo? ", comparandoIdades)
console.log("Diferença entre idades é ", diferençaIdades)

// _____________________________________________________

// Exercício 2:

let numeroPar = Number(prompt("Por favor, insira um número par: "))

let divisaoSobra = numeroPar % 2
console.log("A sobra é", divisaoSobra)

//a) O padrão é que o resultado é sempre 0.
//b) O resto quando é número ímpar é 1. 

// _____________________________________________________

// Exercício 3: 

let idade = Number(prompt("Qual a sua idade? "))

let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idadeDias * 24

console.log("A idade do usuário é", idade, "anos", "Em meses é", idadeMeses, ". Em dias é ", idadeDias, ". Em horas é ", idadeHoras, "horas." )

// _____________________________________________________

// Exercício 4:

let numero1 = Number(prompt("Insira um número: "))
let numero2 = Number(prompt("Insira outro número: "))

let maior1 = numero1 > numero2
let igualdade = numero1 == numero2
let divisível = numero1 % numero2 == 0
let divisivel2 = numero2 % numero2 == 0

console.log("O primeiro numero é maior que o segundo?", maior1)
console.log("O primeiro numero é igual ao segundo?", igualdade)
console.log("O primeiro numero é divisível pelo segundo?", divisível)
console.log("O segundo numero é divisível pelo primeiro?", divisivel2)

// _____________________________________________________

// Desafios:

// 1- 
//  a) 

let temperaturaFahrenheit = 77
let temperaturaKelvin = (temperaturaFahrenheit - 32) * (5/9) + 273.15

console.log("A temperatura em Kelvin é", temperaturaKelvin, "K.")

// // b)

let temperaturaCelsius = 80 
let temperaturaFahrenheit2 = (temperaturaCelsius) * (9/5) + 32 

console.log("A temperatura em Fahrenheit é", temperaturaFahrenheit2, "ºF")

// // c) 

let temperaturaCelsius2 = 30 
let temperaturaFahrenheit3 = (temperaturaCelsius2) * (9/5) + 32 
let  temperaturaKelvin2 = (temperaturaCelsius2) + 273.15

console.log("A temperatura em Fahrenheit é", temperaturaFahrenheit3, "ºF")
console.log("A temperatura em Kelvin é ", temperaturaKelvin2, "K")

// d)

let temperaturaCelsius3 = Number(prompt("Insira uma temperatura em Celsius: "))

let temperaturaFahrenheit4 = (temperaturaCelsius3) * (9/5) + 32 
let  temperaturaKelvin3 = (temperaturaCelsius3) + 273.15

console.log("A temperatura em Fahrenheit é", temperaturaFahrenheit4, "ºF")
console.log("A temperatura em Kelvin é ", temperaturaKelvin3, "K")

// _____________________________________________________

// a)
// quilowatt-hora = R$ 0.05 Quanto consome 280 watt/H

let quilowattHoraConsumido = Number(prompt("Insira a quantidade de kilowatt-hora: "))

let valorPago = quilowattHoraConsumido * 0.05

console.log("O valor a ser pago pela residência é de : R$", valorPago, "." )

// b)
// desconto de 15% = Para calcular o valor mais rapidamente é só multiplicar por 0.85

let valorComDesconto = valorPago * 0.85
console.log("O novo valor a ser pago com desconto de 15% é R$", valorComDesconto, ".")

// _____________________________________________________

// 3)
// a)

let ValorEmLibras = 20
let libraParaKg = ValorEmLibras / 2.205
console.log("20lb equivale a ", libraParaKg, "kg")

// b) 

let ValorEmOnça = 10.5
let onçaParaKg = ValorEmOnça / 35.274

console.log("10.5oz equivalem a", onçaParaKg, "kg")

// c)

let milhas = 100 
let milhasParaMetros = milhas * 1609

console.log("100mi equivalem a", milhasParaMetros, "m")    

// d)

let pés = 50
let pésParaMetro = pés / 3.281

console.log("50ft equivalem a", pésParaMetro, "m")

// e)

let galao = 103.56
let galaoParaLitro = galao * 3.785

console.log("103.56gal equivalem a ", galao, "l")

// f)

let xicara = 450
let xicaraParaLitro = xicara / 3.52

console.log("450 xic equivalem a", xicaraParaLitro, "l")

// g)

let ValorLibras = Number(prompt("Insira o valor em Libras desejado para a conversão: "))
let ValorEmKg = ValorLibras / 2.205
console.log(ValorLibras.toString(),"lb equivale a ", ValorEmKg, "kg")













