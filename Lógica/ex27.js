
//   
//27. Implemente um programa que encontre o fatorial de um número.Implemente
let numero = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

console.log("Fatorial: " + fatorial);