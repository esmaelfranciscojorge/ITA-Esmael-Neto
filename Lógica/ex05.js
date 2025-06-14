



 // 5. Faça um programa que classifica um triângulo como equilátero, isósceles ou
 let lado1 = Number(prompt("Digite o primeiro lado:"));
 let lado2 = Number(prompt("Digite o segundo lado:"));
 let lado3 = Number(prompt("Digite o terceiro lado:"));
 
 if (lado1 === lado2 && lado2 === lado3) {
   console.log("Triângulo Equilátero.");
 } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
   console.log("Triângulo Isósceles.");
 } else {
   console.log("Triângulo Escaleno.");
 }