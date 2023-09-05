function teste(nome){
    console.log('Meu nome é ' + nome);
}


function fatoracao(valor1,valor2) {
    return Math.pow(valor1,valor2);
}


function main(){
    teste('Marcus');
    console.log(fatoracao(10,3));
}

main();