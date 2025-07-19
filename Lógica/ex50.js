function calcularValorTotalEstoque(valoresMercadorias) {
    let valorTotal = valoresMercadorias.reduce((a, b) => a + b, 0);
    let media = valorTotal / valoresMercadorias.length;
    console.log(`Valor total em estoque: ${valorTotal}`);
    console.log(`Média de valor das mercadorias: ${media}`);
}

let valoresMercadorias = [100, 200, 300, 400, 500];
calcularValorTotalEstoque(valoresMercadorias);