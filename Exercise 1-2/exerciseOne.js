
let init = 2;
let end = 10;
const numerosPrimos = [];

function primo(numero) {
  for (let i = init; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

function isPrimo (init,end){
  for (let j=init; j< end; j++) {
  
    if (primo(j)) {
        numerosPrimos.push(j);
      }
      
    }
    
    console.log(numerosPrimos);
}

isPrimo(init,end);
