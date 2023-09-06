
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }else if(p1.idade < p2.idade){
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}

const marcus = new Pessoa('marcus', 26);
const carlos = new Pessoa('Carlos', 24);

// console.log(marcus);
// console.log(marcus.descrever());

compararPessoas(marcus,carlos);