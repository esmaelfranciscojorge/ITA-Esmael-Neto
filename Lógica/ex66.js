function multiplicarVetor() {
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(parseFloat(prompt("Digite um valor:")));
    }
    let x = parseFloat(prompt("Digite o valor para multiplicar:"));
    let resultado = vetor.map(valor => valor * x);
    console.log(resultado);
}

multiplicarVetor();