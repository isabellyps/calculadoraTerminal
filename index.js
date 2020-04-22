const calculadora = require('./calc');
const promptSync = require('prompt-sync')();

function opcoes() {
    console.log(
        `
        Escolha uma opção (Digite apenas o número):
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        0 - Sair
        `
    )
}

function opcaoSelecionada(opcao) {
    if(opcao != '0') {
        const num1 = Number(promptSync('Digite o número 1: '));
        const num2 = Number(promptSync('Digite o número 2: '));
    
        if (opcao == '1') {
            return calculadora.soma(num1, num2);
        }
        if (opcao == '2') {
            return calculadora.subtracao(num1, num2);
        }
        if (opcao == '3') {
            return calculadora.multiplicacao(num1, num2);
        }
        if (opcao == '4'){
            return calculadora.divisao(num1, num2)
        }
    }
}

let opcao;

while (opcao != '0') {
    opcoes();
    opcao = promptSync('Qual a opção? ');
    if (opcao >= 5) {
        console.log('Opção inválida, escolha de 0 a 4');
    } else {
        const resultado = opcaoSelecionada(opcao);
        console.log(`O resultado da operação: ${opcao} é: ${resultado}.`);
    }
}