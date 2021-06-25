```

function calculaPrecoTotal(quantidade) {
  let precoTotal = 0
  if(quantidade < 12){
    precoTotal = 1.30 * quantidade
  } else {
    precoTotal = quantidade
  }
  
  return precoTotal 
}

```