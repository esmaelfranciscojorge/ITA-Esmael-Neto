 function verificarVoto(anoAtual, anoNascimento) {
    let idade = anoAtual - anoNascimento;
   
    if (idade >= 18) {
        console.log('Pode votar');
    } else {
        console.log('Não pode votar');
    }
}

verificarVoto(2023, 2005);