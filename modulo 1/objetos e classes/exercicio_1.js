class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    consumoCombustivel(distancia, precoCombustivel) {
        return this.gastoMedioPorKm * distancia * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 0.05);

console.log(uno);

console.log(uno.consumoCombustivel(70, 5.92).toFixed(2));