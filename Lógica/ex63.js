function calcularMediaNotas() {
    let notas = [];
    for (let i = 0; i < 20; i++) {
        notas.push(parseFloat(prompt("Digite a nota do aluno:")));
    }
    let soma = notas.reduce((a, b) => a + b, 0);
    let media = soma / notas.length;
    let acimaMedia = notas.filter(nota => nota > media).length;
    console.log(`Média: ${media}`);
    console.log(`Quantidade de alunos acima da média: ${acimaMedia}`);
}

calcularMediaNotas();