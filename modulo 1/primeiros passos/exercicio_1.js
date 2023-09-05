let nota1 = 1;
let nota2 = 10;
let nota3 = 3;

const media = (nota1 + nota2 + nota3)/3;

if (media < 5){
    console.log('reprovado');
}else if (media <= 7){
    console.log('recuperação');
}else{
    console.log('aprovado');
}