  // 30. Crie um programa que encontre o maior elemento em um vetor.
  let vetor = [];
let quantidade = Number(prompt("Quantos números quer digitar?"));

for (let i = 0; i < quantidade; i++) {
  let num = Number(prompt("Digite um número:"));
  vetor.push(num);
}

let maior = Math.max(...vetor);
console.log("Maior número digitado: " + maior);