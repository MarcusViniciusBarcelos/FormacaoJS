const {gets, print} = require('./funcoes-auxiliares2');


let salarioBruto = gets();
let bonus = gets();
let salarioLiquido = null;


function CalcularsalarioLiquido(salario, aliquota, adicional){
    return (salario - (salario *(aliquota/100))) + adicional;
}


if (salarioBruto <= 1100.00) {
    salarioLiquido = CalcularsalarioLiquido(salarioBruto, 5, bonus);
}else if (salarioBruto <= 2500.00) {
    salarioLiquido = CalcularsalarioLiquido(salarioBruto, 10, bonus);
} else {
    salarioLiquido = CalcularsalarioLiquido(salarioBruto, 15, bonus);
}


print(salarioLiquido);