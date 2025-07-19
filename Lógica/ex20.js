// === EXERCÍCIO 20 - Parte 1 ===
// Ler 3 valores e escrever a soma dos 2 maiores

let a = 7;
let b = 3;
let c = 10;

let valores = [a, b, c];
valores.sort((x, y) => y - x);

let soma = valores[0] + valores[1];
console.log("1️⃣ Soma dos dois maiores valores:", soma);

// === EXERCÍCIO 20 - Parte 2 ===
// Teste de mesa: calcular z = (x * y) + 5 e mostrar resposta com base em z

let x = 5;
let y = -2;

const z = (x * y) + 5;
let resposta;

if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}

console.log("\n2️⃣ Teste de Mesa:");
console.log("x =", x);
console.log("y =", y);
console.log("z =", z);
console.log("Resposta =", resposta);