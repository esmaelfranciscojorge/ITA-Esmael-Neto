let kgMorango = 4;
let kgMaca = 5;

let precoMorango = (kgMorango <= 5) ? 500 : 450;
let precoMaca = (kgMaca <= 5) ? 700 : 600;

let total = (kgMorango * precoMorango) + (kgMaca * precoMaca);
let pesoTotal = kgMorango + kgMaca;

if (pesoTotal > 8 || total > 20000) {
  total *= 0.9; // desconto de 10%
}

console.log("Valor total a pagar:", total, "Kz");