/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

//Inputs mais simples, que podemos pegar com o value do que foi digitado
let nomeSobrenome = document.getElementById("nome");

let altura = document.getElementById("altura");

let idade = document.getElementById("idade");

let biografia = document.getElementById("biografia");

let listaItens = document.getElementById("listaItens");

let checkbox = document.getElementById("checkbox");

let radioGrupo = document.getElementsByName("radioGrupo");

//Capturando o botão de salvar
let botaoSalvar = document.getElementById("salvar");

//adiciona um evento ao botão de "salvar"
botaoSalvar.addEventListener("click", function (evento) {

    //Valida se o campo obrigatório, está preenchido
    if (nomeSobrenome.value) {
        evento.preventDefault();

        /* console.log("Exibindo:");
        console.log(`Nome e sobrenome: ${nomeSobrenome.value}`);
        console.log(`Altura: ${altura.value}`);
        console.log(`Idade: ${idade.value}`);
        console.log(`Biografia: ${biografia.value}`);
        console.log("\n");

        //@@@ Manipulando a lista de itens // Elemento select/options
        console.log(listaItens); //mostrar a estrutura do "select"
        console.log(listaItens[1].innerText); //mostar o texto
        console.log(listaItens.value)

        //@@@ Manipulando o checkbox
        console.log(checkbox.value); //pega o valor do "value" ou "on" se n tiver value
        console.log(checkbox.checked); //Retorna o booleano

        //@@@ Manipulando o RadioButton - RadioGroup
        //Captura pelo atributo "name"

        console.log(radioGrupo); //Exite uma lista de elementos

        let radioSelecionado;

        radioGrupo.forEach(radio => {
            //console.log(radio.value); //se n tiver.. retorna "on"
            console.log(radio.checked);

            //E se eu quisesse "pegar esse elemento" ?
            if (radio.checked) {
                radioSelecionado = radio;
            }

        });

        //Pega o elemento específico
        console.log(radioSelecionado.value); */

        /* 2- Fazendo a normalização das informações */
        
    }
});