function calcularSalarioTotalComComissao(valorVendas, salarioFixo) {
    let comissao;
    if (valorVendas <= 500000) {
        comissao = valorVendas * 0.03;
    } else {
        comissao = (500000 * 0.03) + ((valorVendas - 500000) * 0.05);
    }
   
    let salarioTotal = salarioFixo + comissao;
    console.log(`Salário total: ${salarioTotal}`);
}

calcularSalarioTotalComComissao(600000, 40000);