


/*
9. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias



e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365

dias e mês com 30 dias.
*/ 
let anos = Number(prompt("Digite quantos anos você tem:"));
let meses = Number(prompt("Digite quantos meses (além dos anos):"));
let dias = Number(prompt("Digite quantos dias (além dos meses):"));

let idadeEmDias = (anos * 365) + (meses * 30) + dias;

console.log("Idade em dias: " + idadeEmDias);