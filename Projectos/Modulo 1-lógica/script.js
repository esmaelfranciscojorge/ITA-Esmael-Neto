  const alunos = [];

    function calcularSituacao(media) {
      if (media >= 10) return "Aprovado";
      if (media >= 8) return "Recuperação";
      return "Reprovado";
    }

    function atualizarTabela() {
      const tbody = document.querySelector("#tabelaAlunos tbody");
      tbody.innerHTML = "";
      alunos.forEach((a, i) => {
        tbody.innerHTML += `
          <tr>
            <td>${a.nome}</td>
            <td>${a.idade}</td>
            <td>${a.genero}</td>
            <td>${a.nota1}</td>
            <td>${a.nota2}</td>
            <td>${a.media.toFixed(1)}</td>
            <td>${a.situacao}</td>
            <td>
              <button onclick="removerAluno(${i})">Remover</button>
            </td>
          </tr>`;
      });
      mostrarRelatorios();
    }

    function mostrarRelatorios() {
      if (alunos.length === 0) return;
      let totalMedia = alunos.reduce((soma, a) => soma + a.media, 0);
      let maior = Math.max(...alunos.map(a => a.media));
      let menor = Math.min(...alunos.map(a => a.media));
      let aprovados = alunos.filter(a => a.situacao === "Aprovado").length;
      let recuperacao = alunos.filter(a => a.situacao === "Recuperação").length;
      let reprovados = alunos.filter(a => a.situacao === "Reprovado").length;
      let maiores18 = alunos.filter(a => a.idade > 18).length;

      document.getElementById("relatorios").innerHTML = `
        <h3>Relatórios</h3>
        <p>Média geral: ${(totalMedia / alunos.length).toFixed(2)}</p>
        <p>Maior média: ${maior}</p>
        <p>Menor média: ${menor}</p>
        <p>Aprovados: ${aprovados}, Recuperação: ${recuperacao}, Reprovados: ${reprovados}</p>
        <p>Maiores de 18 anos: ${maiores18}</p>
      `;
    }

    function removerAluno(index) {
      alunos.splice(index, 1);
      atualizarTabela();
    }

    function ordenarPorNome() {
      alunos.sort((a, b) => a.nome.localeCompare(b.nome));
      atualizarTabela();
    }

    function ordenarPorMedia() {
      alunos.sort((a, b) => b.media - a.media);
      atualizarTabela();
    }

    document.getElementById("formAluno").addEventListener("submit", function(e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const idade = parseInt(document.getElementById("idade").value);
      const genero = document.getElementById("genero").value;
      const nota1 = parseFloat(document.getElementById("nota1").value);
      const nota2 = parseFloat(document.getElementById("nota2").value);
      const media = (nota1 + nota2) / 2;
      const situacao = calcularSituacao(media);

      alunos.push({ nome, idade, genero, nota1, nota2, media, situacao });
      this.reset();
      atualizarTabela();
    });