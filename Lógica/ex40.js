function calcularIdades(homem1, homem2, mulher1, mulher2) {
    let homens = [homem1, homem2];
    let mulheres = [mulher1, mulher2];
    homens.sort((a, b) => b - a);
    mulheres.sort((a, b) => a - b);
    let soma = homens[0] + mulheres[0];
    let produto = homens[1] * mulheres[1];
    console.log(`Soma das idades do homem mais velho e da mulher mais nova: ${soma}`);
    console.log(`Produto das idades do homem mais novo e da mulher mais velha: ${produto}`);
}

calcularIdades(25, 30, 20, 22);