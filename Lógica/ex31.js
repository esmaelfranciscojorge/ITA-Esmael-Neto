let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma = 0;
let total = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    soma += matriz[i][j];
    total++;
  }
}

let media = soma / total;
console.log("Média dos valores da matriz é:", media);