
const pessoa = {
    nome: 'marcus',
    idade: 26,

    descrever: () => {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

// pessoa.descrever();

const atributo = 'idade';

// console.log(pessoa[atributo]);
console.log(pessoa['nome']);