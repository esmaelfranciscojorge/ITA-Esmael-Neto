 function calcularSalarioTotal(horasTrabalhadas, salarioPorHora) {
    let horasExtras = horasTrabalhadas - 160; // 40 horas/semana * 4 semanas
    let salarioTotal;
   
    if (horasExtras > 0) {
        salarioTotal = (160 * salarioPorHora) + (horasExtras * salarioPorHora * 1.5);
    } else {
        salarioTotal = horasTrabalhadas * salarioPorHora;
    }
   
    console.log(`Salário total: ${salarioTotal}`);
}
so
calcularSalarioTotal(180, 50);