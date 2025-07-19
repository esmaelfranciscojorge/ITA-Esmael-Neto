function encontrarModa(dados) {
    let frequencia = {};
    for (let i = 0; i < dados.length; i++) {
        if (frequencia[dados[i]]) {
            frequencia[dados[i]]++;
        } else {
            frequencia[dados[i]] = 1;
        }
    }
    let moda = Object.keys(frequencia).reduce((a, b) => frequencia[a] > frequencia[b] ? a : b);
    console.log(moda);
}

let dados = [1, 2, 2, 3, 3, 3];
encontrarModa(dados);