const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// const leitura = fs.promises.readFile(filePath)

// leitura
//     .then((arquivo) =>arquivo.toString('utf8'))
//     .then((texto) => texto.split('\n').slice(1))
//     .then((linhas) => linhas.map((linha)=> {
//         const [nome, feito] = linha.split(';')
//             return {
//                 nome, 
//                 feito: feito.trim() === 'true'
//             }
//         }))
//     .then((listaTarefas) => console.log(listaTarefas))
//     .catch((err) => console.log('deu ruim', err))
//     .finally(() => console.log('finalizando'))


// ----------------------------ASYNC-AWAIT----------------------------

async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)
    const textoArquivo = arquivo.toString('utf-8')
    console.log(textoArquivo)
}

buscarArquivo()