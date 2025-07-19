function multiplicarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
        }
    }
    console.log(resultado);
}
let matrizA = [[1, 2], [3, 4]];
let matrizB = [[5, 6], [7, 8]];
multiplicarMatrizes(matrizA, matrizB);