function calcularDiferencaDatas(data1, data2) {
    let diferenca = Math.abs(data1.getTime() - data2.getTime());
    let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    console.log(dias);
}

// Exemplo de uso
let data1 = new Date(data1, data2);