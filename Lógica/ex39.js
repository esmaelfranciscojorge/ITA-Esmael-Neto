let litros = 25; // exemplo
let tipo = 'A'; // 'A' para álcool, 'G' para gasolina
let precoLitro;
let total;

if (tipo === 'A') {
  precoLitro = 250;
  total = litros * precoLitro;
  total -= (litros <= 20) ? total * 0.03 : total * 0.05;
} else if (tipo === 'G') {
  precoLitro = 300;
  total = litros * precoLitro;
  total -= (litros <= 20) ? total * 0.04 : total * 0.06;
} else {
  console.log("Tipo de combustível inválido.");
}

console.log("Valor a pagar:", total, "Kz");