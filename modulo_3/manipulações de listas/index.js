// ----------------------------FUNÇÕES-----------------------------

function teste () {
    console.log('meu nome é marcus');
}

function teste2 (teste) {
    teste()
    console.log('meu sobrenome e barcelos')

}

// ----------------------------FUNÇÕES-----------------------------


function soma(x) {
    return function (y){
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(soma(10)(20))

// ----------------------------FUNÇÕES-----------------------------

const pessoa = {
    nome: 'marcus',
    idade: 26
}


function teste (prefixo) {
    console.log(prefixo, this.nome);
}

// teste();
teste.apply(pessoa, ['olaaaaa']);
teste.call(pessoa, 'olaaaaa');

// ----------------------------FUNÇÕES-----------------------------


function adicao(x,y){
    return x + y;
}
function subtracao(x,y){
    return x - y;
}
function multiplicacao(x,y){
    return x * y;
}
function divisao(x,y){
    return x / y;
}

function calculadora(x, operacao, y) {
    console.log(operacao(x,y));
}

calculadora(10, adicao, 10)
calculadora(10, subtracao, 10)
calculadora(10, multiplicacao, 10)
calculadora(10, divisao, 10)

// ----------------------------LISTAS-----------------------------

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// lista.forEach((value, i, listReference) => {
//     console.log(value, i, listReference)
// })

const cb = (value, i, listRef) => {
    console.log(value + i)
}
lista.forEach(cb);


// ----------------------------LISTAS-----------------------------

const numerosPares = lista.filter((element) => {                                       // filter devolve uma lista nova
    return (element % 2 === 0)
})
console.log(lista)
console.log(numerosPares)


// ----------------------------LISTAS-----------------------------

class Pessoa {
    constructor(name){
        this.name = name;
    }
}

const lista2 = [new Pessoa('marcus'), new Pessoa('carlos'), new Pessoa('ana'), new Pessoa('carol')];

console.log(lista2)

const listaNomes = lista2.map((element) => element.name)
// for (let i = 0; i < lista2.length; i++) {
//     const element = lista2[i];
//     listaNomes.push(element.name);
// }
console.log(listaNomes)

// ----------------------------LISTAS-----------------------------

const somaTotal = lista.reduce((previous, current) => {
    console.log(previous + current)
    return previous + current                                       // reduce serve pra retornar um unico elemento
})

console.log(somaTotal)

// ----------------------------LISTAS-----------------------------

const lista4 = [1, 2, 3]

console.log(lista4.join(' - '))

const lista5 = [{nome: 'marcus'},{nome: 'carlos'},{nome: 'mana'}]
console.log(lista5.map((e) => e.nome).join(' - '))

console.log(
    lista5.map((e) => e.nome)
        .filter((e) => e.startsWith('m'))
        .join(' - ')
)

console.log(
    lista5.filter((e) => e.nome.startsWith('m'))
        .map((e) => `<li>${e.nome}</li>`)
        .join(' - ')
)