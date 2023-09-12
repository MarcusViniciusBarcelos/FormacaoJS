class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.nome.idade = idade;
    }
}


const pessoa = {
    idade: 18
}

const p1 = {
    nome: 'pessoa1',
    idade: 20,
    __proto__: pessoa
}