// Escreva um programa que verifica se um número é positivo ,negativo ou nulo.


let entrada = prompt("Degite um número: \n");
let numero = parseFloat(entrada);
if (isNaN(numero)){
    console.log("Isso não é um número válido!");
}else{
    if(numero > 0){
        console.log("Número positivo!.");
    }
    else if(numero < 0){
       console.log("Número Negativo!.");
    }
    else{
        console.log("O Número é nulo!");
    }
}