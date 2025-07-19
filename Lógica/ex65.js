function encontrarMenorElemento() {
    let vetor = [];
    for (let i = 0; i < 20; i++) {
        vetor.push(parseFloat(prompt("Digite um valor:")));
    }
    let menor = Math.min(...vetor);
    let posicao = vetor.indexOf(menor);
    console.log(`Menor elemento: ${menor}`);
    console.log(`Posição: ${posicao}`);
}

encontrarMenorElemento();