function calcularValorTotalEstoque() {
    let valorTotal = 0;
    let quantidadeMercadorias = 0;
    let continuar = true;
    while (continuar) {
        let valor = parseFloat(prompt("Digite o valor da mercadoria:"));
        valorTotal += valor;
        quantidadeMercadorias++;
        let resposta = prompt("Mais mercadorias? (S/N)");
        if (resposta.toUpperCase() === "N") {
            continuar = false;
        }
    }
    let media = valorTotal / quantidadeMercadorias;
    console.log(`Valor total em estoque: ${valorTotal}`);
    console.log(`Média de valor das mercadorias: ${media}`);
}

calcularValorTotalEstoque();