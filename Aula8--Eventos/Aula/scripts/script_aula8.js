/*
 Tipos de eventos que temos:
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado
*/

///@@@@Eventos de tela/pagina

//Se estiver "solto" no script.. vai executar automaticamente...
alert("Exibe ao iniciar a página") //MAS, geralmente teremos os códigos em blocos de funções

function exibeAlertaAoIniciar() {
    alert("Exibe ao iniciar a página");
}

//Invocar a função
exibeAlertaAoIniciar();

//Posso usar o onLoad, pra iniciar as funções/códigos que desejo
window.onload = function() {
        exibeAlertaAoIniciar();
}

///@@@@Eventos de formulários

///onChange na idade (no inout do HTML)
function exibeIdadeInformada() {
    let idade = document.getElementById("textIdade");
    console.log(idade.value);
}


///@@@ Eventos do mouse (onClick)

//-> Colocar o onClick no BTN no HTML, chamando o exibeIdadeInformada

let botaoEnviar = document.getElementById("botaoEnviar");

//2ª forma de atribuir
botaoEnviar.onclick = function(){
    exibeIdadeInformada();
};

//3ª forma (bem comum de ser encontrada)
botaoEnviar.addEventListener('click', function (evento) {
    exibeIdadeInformada();
    evento.preventDefault(); //retira o comportamento padrão da página (Atualizar ao fazer o submit)
});


///@@@ Eventos do mouse, além do click (onClick)

//Dispara ao estar em cima do elemento
botaoEnviar.onmouseover = () => {
    console.log("Mouse em cima do botão");
    botaoEnviar.style.width = "50%"
}

//Dispara ao sair de cima do elemento
botaoEnviar.onmouseout = () => {
    console.log("Mouse saiu de cima do botão");
    botaoEnviar.style.width = "10%"
}


///@@@@@ Eventos de teclado

function alertaAoPressionarUmaTecla(teclaCapturada) {
    console.log(`A tecla ${teclaCapturada} foi pressionada`);
}

//Dispara.. quando a tecla é pressionada
onkeydown = function (evento) {
    console.log(evento.key)
    alertaAoPressionarUmaTecla(evento.key);
}

//Dispara.. quando a tecla volta da pressão inicial
onkeyup = function () {
    alertaAoPressionarUmaTecla();
}