

// 7. Implemente um programa que calcula o preço final de um produto com base em descontos (com porcentagem).
let preco = Number(prompt("Digite o preço do produto:"));
let porcentagem = Number(prompt("Digite a porcentagem de desconto:"));

let desconto = (porcentagem / 100) * preco;
let precoFinal = preco - desconto;

console.log("Preço final com desconto: " + precoFinal);