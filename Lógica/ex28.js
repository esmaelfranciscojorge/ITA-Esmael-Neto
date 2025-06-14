 // 28. Escreva um programa que imprime a sequência de Fibonacci até o N-ésimo termo.
 let N = Number(prompt("Digite até qual termo de Fibonacci:"));
let a = 0, b = 1;

console.log(a);
if (N > 1) console.log(b);

for (let i = 2; i < N; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}