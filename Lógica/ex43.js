function verificarCodigo(codigo, senha) {
    let codigoArmazenado = 1234;
    let senhaArmazenada = 9999;
    if (codigo === codigoArmazenado) {
        if (senha === senhaArmazenada) {
            console.log('Acesso permitido');
        } else {
            console.log('Senha incorreta');
        }
    } else {
        console.log('Usuário inválido!');
    }
}

verificarCodigo(1234, 9999);