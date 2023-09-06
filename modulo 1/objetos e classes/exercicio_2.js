class Pessoa {
    nome;
    peso;
    altura;
    IMC;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso =peso;
        this.altura = altura;
        this.IMC = (peso / Math.pow(altura,2)).toFixed(2);
    }


    statusIMC () {
        const IMC = this.IMC;
        if (IMC < 18.5) {
            return 'abaixo do peso';
         }else if(IMC < 25){
            return 'com o peso normal';
         }else if(IMC < 30){
            return 'acima do peso';
         }else if(IMC < 40){
            return 'obseso';
         }else{
            return 'com obesidade Grave';
         }
    }

    exibirIMC () {
        return `meu nome é ${this.nome}, meu IMC é ${this.IMC} e estou ${this.statusIMC()}`;
    }
}

const marcus = new Pessoa('marcus', 97, 2.01);
console.log(marcus);
console.log(marcus.exibirIMC());