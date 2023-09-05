let peso = 96;
let altura = 2.01;

const IMC = peso / Math.pow(altura,2);
console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('abaixo do peso');
}else if(IMC < 25){
    console.log('Peso normal');
}else if(IMC < 30){
    console.log('acima do peso');
}else if(IMC < 40){
    console.log('Obseso');
}else{
    console.log('obesidade Grave');
}