

 // 22. Escreva um programa que verifica se um número é primo.
 let numero = Number(prompt("Digite um número:"));
let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}