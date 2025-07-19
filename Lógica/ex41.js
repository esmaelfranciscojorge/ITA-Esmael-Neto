function calcularPrecoFrutas(quantidadeMorangos, quantidadeMacas) {
    let precoMorangos;
    let precoMacas;
    if (quantidadeMorangos <= 5) {
        precoMorangos = 2000;
    } else {
        precoMorangos = 1800;
    }
    if (quantidadeMacas <= 5) {
        precoMacas = 1500;
    } else {
        precoMacas = 1250;
    }
    let totalMorangos = quantidadeMorangos * precoMorangos;
    let totalMacas = quantidadeMacas * precoMacas;
    let total = totalMorangos + totalMacas;
    if (quantidadeMorangos + quantidadeMacas > 8 || total > 20000) {
        total *= 0.9;
    }
    console.log(`Total a pagar: ${total}`);
}

calcularPrecoFrutas(6, 4);