 function calcularCustoTotalMacas(numeroMacas) {
    let precoMacas;
    if (numeroMacas < 12) {
        precoMacas = 100;
    } else {
        precoMacas = 75;
    }
   
    let custoTotal = numeroMacas * precoMacas;
    console.log(`Custo total: ${custoTotal} kz`);
}

calcularCustoTotalMacas(15);