const {gets, print} = require('./funcoes-auxiliares2');

media = gets();


if(media < 5){
    print('reprovado')
}else if(media < 7){
    print('Recuperação')
}else{
    print('Aprovado')
}