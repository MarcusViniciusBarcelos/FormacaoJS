function veririficarIdade(idade){
    if(idade < 18){
    return 'menor de idade';
    }else if(idade < 60){
    return 'maior de idade';
    }else{
        return 'idoso'
    }
}
(function main(){
    console.log(veririficarIdade(60));
})();