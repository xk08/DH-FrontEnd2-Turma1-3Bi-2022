//Tipos de funções encontrados no JS

//Função declarativa - ou declarada
function exibeNome(nomeRecebido1) {
    return console.log(nomeRecebido1);
}
//Invocando a função
exibeNome("Marcos");

// Funções de expressão - ou expressas
let funcaoNome = function(nomeRecebido1) {
    return console.log(nomeRecebido1);
}
funcaoNome("Nome usuário");

//Callbacks (Função que recebe/executa outra função recebida por parametro)


/* Objetivo -> Somar 2 numeros inteiros */
let executaCalculo = function(funcaoRecebida) { //Recebe uma função por parametro
    let numero1 = 5;
    let numero2 = 10;

    //Executa a função recebida por parametro (e passa os 2 números para ela)
    let resultado = funcaoRecebida(numero1, numero2 ); //Envia os números para a função recebida

    //Função aninhada a função principal
    function exibeResultado(resultadoRecebido) {
        console.log(resultadoRecebido);
    }
    exibeResultado(resultado)
}

//Função externa, que será enviada por parametro
function soma2numeros (numero1, numero2) {
    return numero1+numero2
}

function subtrai2numeros (numero1, numero2) {
    return numero1-numero2
}

//Executa/Invoca a função principal e passa por parametro a outra função desejada na execução.
executaCalculo(soma2numeros);

//Exemplo da utilização de Callbacks na prática
let botaoEnviar = document.getElementById("botaoEnviar");
/* O eventListner trabalha com callbacks, pois permite que outra função (qualquer) seja executado ao realizar determinado evento */
botaoEnviar.addEventListener("click", function(evento){
    console.log(evento);
})

//Funções de Seta => (Arrow Functions)

//Modo convencional de declarar/executar funções
let soma = function(numero1, numero2) {
    return console.log(numero1 + numero2);
}
soma(5, 10)

//Usando arrow function (Com corpo na função e sem retorno)
let somaComArrowFunction = (numero1, numero2) => {
     console.log(numero1 + numero2);
};
somaComArrowFunction(4, 4);

//Simplificando ainda mais a arrow-function
/* Pode-se utilizar desta maneira, quando a função possui apenas 1 retorno previsto.
Assim, não é preciso informar: assinatura, escopo, corpo e retorno para a mesma */
let arrowSimplificada = (numero1, numero2) => console.log(numero1+numero2);

arrowSimplificada(4,6)