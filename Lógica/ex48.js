

// 48. Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.

let negativos = 0;

for (let i = 1; i <= 10; i++) {
  let valor = Number(prompt("Digite o valor " + i + ":"));
  if (valor < 0) {
    negativos++;
  }
}

console.log("Quantidade de valores negativos: " + negativos);