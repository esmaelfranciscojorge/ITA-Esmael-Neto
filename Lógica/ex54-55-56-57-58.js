function pesquisaSalarioFilhos() {
    let somaSalario = 0;
    let somaFilhos = 0;
    let maiorSalario = -Infinity;
    let quantidadePessoas = 0;
    let quantidadeSalarioMenor150 = 0;
    while (true) {
        let salario = parseFloat(prompt("Digite o salário:"));
        if (salario < 0) {
            break;
        }
        let filhos = parseInt(prompt("Digite o número de filhos:"));
        somaSalario += salario;
        somaFilhos += filhos;
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario < 150) {
            quantidadeSalarioMenor150++;
        }
        quantidadePessoas++;
    }
    let mediaSalario = somaSalario / quantidadePessoas;
    let mediaFilhos = somaFilhos / quantidadePessoas;
    let percentualSalarioMenor150 = (quantidadeSalarioMenor150 / quantidadePessoas) * 100;
    console.log(`Média de salário: ${mediaSalario}`);
    console.log(`Média de filhos: ${mediaFilhos}`);
    console.log(`Maior salário: ${maiorSalario}`);
    console.log(`Percentual de pessoas com salário menor que R$ 150,00: ${percentualSalarioMenor150}%`);
}


pesquisaSalarioFilhos();