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

        normalizandoDadosDoUsuario(nomeSobrenome.value);
        
    }
});

/* 2- Fazendo a normalização das informações */
function normalizandoDadosDoUsuario(nomeSobrenomeRecebido) {

    //TRIM -> Retirando espaços do inicio e do fim
    let nomeSemEspacos = nomeSobrenomeRecebido.trim();
     console.log("Utilizando o trim()");
    console.log("Com espaços: " + nomeSobrenomeRecebido);
    console.log("Sem espaços: " + nomeSemEspacos);
    console.log("\n"); 

    //toLowerCase()
    let nomeEmMinusculas = nomeSemEspacos.toLowerCase();
    console.log(nomeEmMinusculas); 

    let nomeAlterado = transformaTextoEmMinusculas(nomeSemEspacos);
    console.log(nomeAlterado); 

    //SPLIT() -> Quero separar uma informação presente em uma string
    //Quero separa o nome do sobrenome
    let nomeSeparado = nomeAlterado.split(" ");
     console.log(nomeSeparado);
    console.log(nomeSeparado[0]); 

    //@@ Alterando o valor fixo do HTML
    //Invoca/chama a função que realiza a alteração
    alteraDadosNaPagina(nomeSeparado);
}

function alteraDadosNaPagina(nomeCompletoRecebido) {

    //Capturandos os elementos HTML que serão alterados pelo js
    let nomeUsuario = document.getElementById("nomeUsuario");
    let sobrenomeUsuario = document.getElementById("sobrenomeUsuario");
    let alturaUsuario = document.getElementById("alturaUsuario");
    let biografiaUsuario = document.getElementById("biografiaUsuario");

    //Alterando o nome e sobrenome
    nomeUsuario.innerText = nomeCompletoRecebido[0];
    sobrenomeUsuario.innerText = nomeCompletoRecebido[1];

    //Altera a biografia
    biografiaUsuario.innerText = biografia.value;

    //Altera a altura fazendo uma conversão
    alturaUsuario.innerText = altura.value; //Sem alterar
    alturaUsuario.innerText = modificaAltura(altura.value); //Usando a função que converte

    //Verificando os termos de uso

    //Captura o elemento checkbox
    let checkBoxTermos = document.getElementById("checkbox");

    //Captura o texto do checkBox
    let termosUsuario = document.getElementById("termosUsuario");

    //Verifica se o checkbox foi clicado
    if (checkBoxTermos.checked) {
        termosUsuario.innerText = "Concorda com os termos: SIM"
    } else {
        termosUsuario.innerText = "Concorda com os termos: NÃO"
    }
}

//Converte para minisculas
function transformaTextoEmMinusculas(textoRecebido) { //poderia fazer um para letras Maisculas
    return textoRecebido.toLowerCase();
}

//Converte para maiusculas
function transformaTextoEmMaiusculas(textoRecebido) {
    return textoRecebido.toUpperCase();
}

//Altera a string/caracter para a condição desejada
function modificaAltura(alturaRecebida) {
    return alturaRecebida.replace(",", ".")
}