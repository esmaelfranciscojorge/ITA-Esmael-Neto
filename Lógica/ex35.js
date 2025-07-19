function inverterFrase(frase) {
    let palavras = frase.split(' ');
    let fraseInvertida = palavras.reverse().join(' ');
    console.log(fraseInvertida);
}


let frase = "Olá mundo";
inverterFrase(frase);