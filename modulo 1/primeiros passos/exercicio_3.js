let precoProduto = 100;
let formaDePagamento = 4;
const aVistaDebito = precoProduto - (precoProduto * 0.1);
const aVistaPix = precoProduto - (precoProduto * 0.15);
const aCimaDuasVezes = precoProduto + (precoProduto * 0.1);

if (formaDePagamento === 1) {
    console.log(aVistaDebito.toFixed(2))
}else if (formaDePagamento ===2){
    console.log(aVistaPix.toFixed(2))
}else if (formaDePagamento ===3){
    console.log(precoProduto)
}else{
    console.log(aCimaDuasVezes.toFixed(2))
}