 function calcularDuracaoJogo(horaInicio, horaFim) {
    let duracao;
    if (horaFim > horaInicio) {
        duracao = horaFim - horaInicio;
    } else {
        duracao = 24 - horaInicio + horaFim;
    }
   
    console.log(`Duração do jogo: ${duracao} horas`);
}

calcularDuracaoJogo(10, 14);