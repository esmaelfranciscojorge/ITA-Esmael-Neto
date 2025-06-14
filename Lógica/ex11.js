


/**
 * 
11. Escreva um algoritmo para ler o salário mensal atual de um funcionário e o



percentual de reajuste. Calcular e escrever o valor do novo salário.
 * 
 * 
 */


let salarioAtual = Number(prompt("Digite o salário atual:"));
let percentual = Number(prompt("Digite o percentual de reajuste:"));

let aumento = (percentual / 100) * salarioAtual;
let novoSalario = salarioAtual + aumento;

console.log("Novo salário: " + novoSalario);