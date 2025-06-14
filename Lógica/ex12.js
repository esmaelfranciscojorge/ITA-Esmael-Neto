

/*
12. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a



porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).

Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,

escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final do consumidor

Faça o mesmo com todos os detalhes que eu disse.

*/
let custoFabrica = Number(prompt("Digite o custo de fábrica do carro:"));

let valorDistribuidor = (28 / 100) * custoFabrica;
let impostos = (45 / 100) * custoFabrica;
let custoFinal = custoFabrica + valorDistribuidor + impostos;

console.log("Custo final do carro: " + custoFinal);