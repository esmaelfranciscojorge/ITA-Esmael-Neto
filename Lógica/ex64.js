function encontrarMaiorElemento() {
    let vetor = [];
    for (let i = 0; i < 20; i++) {
        vetor.push(parseFloat(prompt("Digite um valor:")));
    }
    let maior = Math.max(...vetor);
    let posicao = vetor.indexOf(maior);
    console.log(`Maior elemento: ${maior}`);
    console.log(`Posição: ${posicao}`);
}


encontrarMaiorElemento();