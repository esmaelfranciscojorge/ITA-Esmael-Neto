function calcularSaldoAtual(saldo, debito, credito) {
    let saldoAtual = saldo - debito + credito;
    console.log(`Saldo atual: ${saldoAtual}`);
   
    if (saldoAtual >= 0) {
        console.log('Saldo Positivo');
    } else {
        console.log('Saldo Negativo');
    }
}

calcularSaldoAtual(1000, 500, 200);