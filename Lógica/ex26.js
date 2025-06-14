

// 26. Faça um programa que calcule a soma dos números de 1 a N.
let N = Number(prompt("Digite o número final da soma:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}

console.log("Soma total: " + soma);
