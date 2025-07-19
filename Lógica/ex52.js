function encontrarMaiorMenor() {
    let maior = -Infinity;
    let menor = Infinity;
    for (let i = 0; i < 10; i++) {
        let valor = parseFloat(prompt("Digite um valor:"));
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
}

// Exemplo de uso
encontrarMaiorMenor();