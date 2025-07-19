function verificarAposentadoria(anoNascimento, anoIngresso, anoAtual) {
    let idade = anoAtual - anoNascimento;
    let tempoTrabalho = anoAtual - anoIngresso;
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
        console.log('Requerer aposentadoria');
    } else {
        console.log('Não requerer');
    }
}


verificarAposentadoria(1960, 1980, 2023);