 /*
 47. Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1

a 10 do valor lido.
 */

let numero = Number(prompt("Digite um número de 1 a 10:"));

if (numero >= 1 && numero <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
} else {
  console.log("Número fora do intervalo. Digite entre 1 e 10.");
}