
function calcularIMC(peso, altura){
    return  peso / Math.pow(altura,2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
       return 'abaixo do peso';
    }else if(IMC < 25){
       return 'Peso normal';
    }else if(IMC < 30){
       return 'acima do peso';
    }else if(IMC < 40){
       return 'Obseso';
    }else{
       return 'obesidade Grave';
    }
}

(function main(){
    peso = 96;
    altura = 2.01;

    IMC = calcularIMC(peso, altura);

    console.log(IMC.toFixed(2));
    console.log(classificarIMC(IMC));

})();
