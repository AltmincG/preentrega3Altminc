// Array de impuestos a consultar
const impuestos = [
    {id: 1, nombre: "Montepío", porcentaje: 15},
    {id: 2, nombre: "FONASA", porcentaje: 4.5},
    {id: 3, nombre: "FRL", porcentaje: 0.125},
    {id: 4, nombre: "IRPF", porcentaje: 10}
];

let salarioNominal = parseFloat(document.getElementById("salarioNominal").value);

document.addEventListener('DOMContentLoaded', function() {
    const selectImpuesto = document.getElementById('impuestoSelect');
    impuestos.forEach(impuesto => {
        let option = document.createElement('option');
        option.value = impuesto.id;
        option.textContent = impuesto.nombre;
        selectImpuesto.appendChild(option);
    });

    document.getElementById("calcularImpuesto").addEventListener("click", calculoImpuesto);
});

function calculoImpuesto() {
    let salarioNominal = parseFloat(document.getElementById("salarioNominal").value);
    let consultaImpuestos = parseInt(document.getElementById("impuestoSelect").value);
    let impuesto = impuestos.find(imp => imp.id === consultaImpuestos);
    
    if(impuesto && !isNaN(salarioNominal)) {
        let impuestoTotal = (salarioNominal * impuesto.porcentaje) / 100;
        document.getElementById("resultadoImpuesto").innerText = "Usted paga $" + impuestoTotal.toFixed(2) + " de " + impuesto.nombre;
    } else {
        document.getElementById("resultadoImpuesto").innerText = "Por favor, seleccione un impuesto y asegúrese de que el salario nominal sea válido";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calcularTotalImpuestos").addEventListener("click", calcularTotalImpuestos);
});

function calcularTotalImpuestos() {
    let salarioNominal = parseFloat(document.getElementById("salarioNominal").value);
    if (isNaN(salarioNominal)) {
        document.getElementById("resultadoTotalImpuestos").innerText = "Por favor, ingrese un salario nominal válido.";
        return;
    }

    let totalImpuestos = impuestos.reduce((total, impuesto) => {
        return total + (salarioNominal * impuesto.porcentaje / 100);
    }, 0);

    document.getElementById("resultadoTotalImpuestos").innerText = "Total de impuestos pagados: $" + totalImpuestos.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calcularSalarioLiquido").addEventListener("click", calcularSalarioLiquido);
});

function calcularSalarioLiquido() {
    const salarioNominalInput = document.getElementById("salarioNominal");
    const resultadoSalarioLiquidoDiv = document.getElementById("resultadoSalarioLiquido");

    let salarioNominal = parseFloat(salarioNominalInput.value);
    if (isNaN(salarioNominal)) {
        resultadoSalarioLiquidoDiv.innerText = "Por favor, ingrese un salario nominal válido.";
        return;
    }

    let totalImpuestos = impuestos.reduce((total, impuesto) => total + (salarioNominal * impuesto.porcentaje / 100), 0);
    
    let salarioLiquido = salarioNominal - totalImpuestos;
    resultadoSalarioLiquidoDiv.innerText = "Su salario líquido es: $" + salarioLiquido.toFixed(2);
}