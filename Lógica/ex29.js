  // 29. Faça um programa que verifica se um número é palíndromo.
  let numero = prompt("Digite um número:");
let invertido = numero.split('').reverse().join('');

if (numero === invertido) {
  console.log("É palíndromo");
} else {
  console.log("Não é palíndromo");
}
