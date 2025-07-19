function buscarNome() {
    let nomes = [];
    for (let i = 0; i < 10; i++) {
        nomes.push(prompt("Digite um nome:"));
    }
    let nomeBusca = prompt("Digite um nome para buscar:");
    if (nomes.includes(nomeBusca)) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }
}


buscarNome();