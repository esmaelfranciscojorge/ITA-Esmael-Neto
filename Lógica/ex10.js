/*

10. Escreva um algoritmo para ler o número total de eleitores de um município, o



número de votos brancos, nulos e válidos. Calcular e escrever o percentual que

cada um representa em relação ao total de eleitores.

*/
let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

let percBrancos = (votosBrancos / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percValidos = (votosValidos / totalEleitores) * 100;

console.log("Brancos: " + percBrancos.toFixed(2) + "%");
console.log("Nulos: " + percNulos.toFixed(2) + "%");
console.log("Válidos: " + percValidos.toFixed(2) + "%");