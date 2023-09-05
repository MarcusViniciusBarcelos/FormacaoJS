let precoCombustivel = 5.92;
let combustivelPorKm = 12;
let distanciaViajem = 300;

const valorGasto = (distanciaViajem / combustivelPorKm) * precoCombustivel;

console.log(valorGasto.toFixed(2));