//Importando as funções necessárias dos outros scripts do projeto
import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'


//Função de CallBack que executa as operações da calculadora
function executaCalculoCallBack(funcaoRecebida, sinalOperacaoRealizada) {

    //Captura os números informados pelo usuário em tela
    let primeiroNumero = document.getElementById("numero1").value;
    let segundoNumero = document.getElementById("numero2").value;

    //Executa função recebida por parametro + Passa os 2 números por parametro para a mesma
    let resultadoOperacao = funcaoRecebida(primeiroNumero, segundoNumero);

    //Invoca a função que exibe o resultado em tela
    exibeResultadoOperacao(resultadoOperacao);

    //Montando o template da String que será salvo no LOG
    let stringOpercaoRealizada = `${primeiroNumero} ${sinalOperacaoRealizada} ${segundoNumero} = ${resultadoOperacao}`;

    //Invoca a função que registra o log da operação
    exibeOperacoesRealizas(stringOpercaoRealizada);
}

function exibeResultadoOperacao(resultadoOperacaoRecebido) {
    let resultadoOperacao = document.getElementById("resultadoOperacao");
    resultadoOperacao.innerText = resultadoOperacaoRecebido;
}

function exibeOperacoesRealizas(opercacaoRealiadaRecebida) {
    //Captura o elemento pai (div)
    let divLogOperacoes = document.getElementById("operacoesRealizadas");
    //Cria o novo elemento do tipo "p"
    let p = document.createElement('p');
    //Adiciona a classe ao elemento
    p.setAttribute("class", "p-log");
    //Adiciona o texto ao elemento
    p.innerText = opercacaoRealiadaRecebida;
    //Adiciona o "p" a div(elemento pai)
    divLogOperacoes.appendChild(p);
}

//Adicionando evento de click nos botões da tela

//Operacao de Somar
let botaoSoma = document.querySelector("#botaoSomar");
botaoSoma.addEventListener("click", (evento) => {
    evento.preventDefault();
    //Invoca a função de callBack que executa o calculo, passando a função de somar como parametro
    executaCalculoCallBack(somar, "+");
});
//Operacao de Subtrair
let botaoSubtrair = document.querySelector("#botaoSubtrair");
botaoSubtrair.addEventListener("click", (evento) => {
    evento.preventDefault();
    //Invoca a função de callBack que executa o calculo, passando a função de subtrair como parametro
    executaCalculoCallBack(subtrair, "-");
});
//Operacao de Multiplicar
let botaoMultiplicar = document.querySelector("#botaoMultiplicar");
botaoMultiplicar.addEventListener("click", (evento) => {
    evento.preventDefault();
    //Invoca a função de callBack que executa o calculo, passando a função de multiplicar como parametro
    executaCalculoCallBack(multiplicar, "*");
});
//Operacao de Multiplicar
let botaoDividir = document.querySelector("#botaoDividir");
botaoDividir.addEventListener("click", (evento) => {
    evento.preventDefault();
    //Invoca a função de callBack que executa o calculo, passando a função de dividir como parametro
    executaCalculoCallBack(dividir, "/");
});
//Limpar valores na calculadora
let botaoLimpar = document.querySelector("#limpar");
botaoLimpar.addEventListener("click", (evento) => {
    evento.preventDefault();
    //Limpa o resultado da operação
    let resultadoOperacao = document.getElementById("resultadoOperacao");
    resultadoOperacao.innerText = "0"
    //Limpa os valores informados
    document.getElementById("numero1").value = null;
    document.getElementById("numero2").value = null;
});