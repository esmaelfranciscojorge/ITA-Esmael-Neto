function encontrarMaiorMedia() {
    let quantidade = parseInt(prompt("Digite a quantidade de números:"));
    let maior = -Infinity;
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
        let valor = parseFloat(prompt("Digite um valor:"));
        if (valor > maior) {
            maior = valor;
        }
        soma += valor;
    }
    let media = soma / quantidade;
    console.log(`Maior valor: ${maior}`);
    console.log(`Média: ${media}`);
}


encontrarMaiorMedia();