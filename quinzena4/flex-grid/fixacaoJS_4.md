```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let qntsVezesNumero = 0
        for(let i = 0; i < arrayDeNumeros.length; i++){
            if(numeroEscolhido === arrayDeNumeros[i]){
                qntsVezesNumero = qntsVezesNumero + 1
            } 
        }
    if(qntsVezesNumero === 0){
      return `Número não encontrado`
    }
    return `O número ${numeroEscolhido} aparece ${qntsVezesNumero}x`
}
```