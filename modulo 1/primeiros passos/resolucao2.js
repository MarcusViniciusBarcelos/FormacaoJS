let precoGasolina = 5.92;
let precoEtanol = 6.13;
let tipoCombustivel = 'etanol';
let combustivelPorKm = 12;
let distanciaViajem = 300;

const valorGastoEtanol = (distanciaViajem / combustivelPorKm) * precoEtanol;
const valorGastoGasolina = (distanciaViajem / combustivelPorKm) * precoGasolina;

if (tipoCombustivel !== 'gasolina' && tipoCombustivel !== 'etanol' ) {
    console.log('tipo de combustivel invalido');
}else if (tipoCombustivel === 'gasolina'){
    console.log(valorGastoGasolina.toFixed(2))
}else{
    console.log(valorGastoEtanol.toFixed(2))
}