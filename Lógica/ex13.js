
function calcularQuantidadeMedia(quantidadeAtual, quantidadeMaxima, quantidadeMinima) {
    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;
    console.log(`Quantidade média: ${quantidadeMedia}`);
   
    if (quantidadeAtual >= quantidadeMedia) {
        console.log('Não efetuar compra');
    } else {
        console.log('Efetuar compra');
    }
}


calcularQuantidadeMedia(100, 200, 50);
