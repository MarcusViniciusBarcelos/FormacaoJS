const {gets, print} = require('./funcoes-auxiliares2');

const numeros = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < numeros; i++) {
    const numero = gets();

    if (numero % 2 === 0 && numero > maiorPar) {
    maiorPar = numero;
    }else{
        if(menorImpar === null || menorImpar > numero) {
            menorImpar = numero;
        }
    }
}

print(maiorPar);
print(menorImpar);