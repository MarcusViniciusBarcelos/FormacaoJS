function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
}
function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)))
}

function calcularPrecoFinal(precoProduto, formaDePagamento) {

const aVistaDebito = aplicarDesconto(precoProduto, 10);
const aVistaPix = aplicarDesconto(precoProduto, 15);
const aCimaDuasVezes = aplicarJuros(precoProduto, 10);

if (formaDePagamento === 1) {
   return aVistaDebito.toFixed(2)
}else if (formaDePagamento ===2){
   return aVistaPix.toFixed(2)
}else if (formaDePagamento ===3){
   return precoProduto
}else{
   return aCimaDuasVezes.toFixed(2)
}

}

(function main() {

    let precoProduto = 100;
    let formaDePagamento = 4;
    console.log(calcularPrecoFinal(precoProduto, formaDePagamento));

})();







