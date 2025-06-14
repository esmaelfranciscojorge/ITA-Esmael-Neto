

/*
8. Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e



escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):

C F - 32

---------- = -----------

5 9

Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F

Faça o mesmo com estes 8 exercicios

*/


let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));

let celsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperatura em Celsius: " + celsius.toFixed(2));