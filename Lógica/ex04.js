

 //  4. Crie um programa que determina se um ano é bissexto.
 
let ano = prompt("Digite o ano:");
ano = Number(ano);

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log("O ano é bissexto.");
} else {
  console.log("O ano não é bissexto.");
}