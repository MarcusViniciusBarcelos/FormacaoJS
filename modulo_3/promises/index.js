new Promise((resolve, reject) => {
    //processamento
    resolve()
    //executa se resolver
    reject()
})

const promessaNumero = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve (numero)
})

promessaNumero
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou')
    });