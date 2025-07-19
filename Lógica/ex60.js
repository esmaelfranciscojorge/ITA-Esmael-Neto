function sequenciaNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}, ${Array.from({length: 10}, (_, j) => j + 1).join(' ')}`);
    }
}

sequenciaNumeros();