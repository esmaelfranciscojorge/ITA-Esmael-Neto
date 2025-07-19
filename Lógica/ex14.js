function calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
    let comissaoTotal = numeroCarrosVendidos * comissaoPorCarro;
    let bonusVendas = valorTotalVendas * 0.05;
    let salarioFinal = salarioFixo + comissaoTotal + bonusVendas;
   
    console.log(`Salário final: ${salarioFinal}`);
}

calcularSalarioFinal(5, 100000, 50000, 2000);
