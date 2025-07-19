function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

function calcularAreaTriangulo(base, altura) {
    return 0.5 * base * altura;
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaRetangulo(4, 5));
console.log(calcularAreaTriangulo(3, 4));