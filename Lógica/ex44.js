/*
44. Uma empresa quer verificar se um empregado está qualificado para a aposentadoria



ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:

a. Ter no mínimo 65 anos de idade.

b. Ter trabalhado no mínimo 30 anos.

c. Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.


*/
let idade = Number(prompt("Digite a idade do funcionário:"));
let anosTrabalho = Number(prompt("Digite os anos de trabalho:"));

if (idade >= 65 || anosTrabalho >= 30 || (idade >= 60 && anosTrabalho >= 25)) {
  console.log("Pode se aposentar.");
} else {
  console.log("Não pode se aposentar.");
}

