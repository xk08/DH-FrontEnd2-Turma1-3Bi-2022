/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

//Inputs mais simples, que podemos pegar com o value do que foi digitado
let nomeSobrenome = document.getElementById("nome");

let altura = document.getElementById("altura");

let idade = document.getElementById("idade");

let email = document.getElementById("email");

let listaItens = document.getElementById("listaItens");

let checkbox = document.getElementById("checkbox");

let radioGrupo = document.getElementsByName("radioGrupo");

//Capturando o botão de salvar
let botaoSalvar = document.getElementById("salvar");

//Cria variável de controle
let nomeFormularioOk = false;
let emailFormularioOk = false;

 //Bloqueado o botão de salvar ao iniciar a página
 botaoSalvar.setAttribute("disabled", true);
 botaoSalvar.style.backgroundColor = "#908E8E"


//adiciona um evento ao botão de "salvar"
botaoSalvar.addEventListener("click", function (evento) {

    //Valida se o campo obrigatório, está preenchido
    //if (nomeSobrenome.value) { -> Antigo!

    if (nomeFormularioOk && emailFormularioOk) {
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
    let emailUsuario = document.getElementById("emailUsuario");

    //Alterando o nome e sobrenome
    nomeUsuario.innerText = nomeCompletoRecebido[0];
    sobrenomeUsuario.innerText = nomeCompletoRecebido[1];

    //Altera a biografia
    emailUsuario.innerText = email.value;

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

/* REALIZANDO ALGUMAS VALIDAÇÕES */

////////Validando o Nome e sobrenome
nomeSobrenome.addEventListener("click", function () {
    console.log("Clicou no campo do Nome e sobrenome");
    //Altera o fundo do campo ao ser clicado
    nomeSobrenome.style.backgroundColor = "#E2DCDC"
});

nomeSobrenome.addEventListener("blur", function () {
    console.log("Saiu do campo do Nome e sobrenome");

    //Pega o elemento Small
    let nomeSobrenomeValidacao = document.getElementById('nomeSobrenomeValidacao');

    //Altera o fundo do campo ao sair do click 
    nomeSobrenome.style.backgroundColor = "#FFFFFF"

    //Valida se o campo É VAZIO
    if (!nomeSobrenome.value) {
        // troca o fundo
        nomeSobrenome.style.backgroundColor = "#E6626299"

        //Seta a mensage no small (e configura)
        nomeSobrenomeValidacao.innerText = "Campo obrigatório"
        nomeSobrenomeValidacao.style.color = "#D53A3A"
        nomeSobrenomeValidacao.style.fontWeight = "bold"

        //Bloqueado o botão de salvar
        botaoSalvar.setAttribute("disabled", true);
        //Trocando a cor do botão
        botaoSalvar.style.backgroundColor = "#908E8E"

        //Seta a variável para falso
        nomeFormularioOk = false;

    } else if (nomeSobrenome.value.length <= 5) { //Tem que ter mais de 5 caracteres
        // troca o fundo
        nomeSobrenome.style.backgroundColor = "#E6626299"

        //Seta a mensage no small (e configura)
        nomeSobrenomeValidacao.innerText = "O campo deve ter mais de 5 letras"
        nomeSobrenomeValidacao.style.color = "#D53A3A"
        nomeSobrenomeValidacao.style.fontWeight = "bold"

        //Bloqueado o botão de salvar
        botaoSalvar.setAttribute("disabled", true);
        //Trocando a cor do botão
        botaoSalvar.style.backgroundColor = "#908E8E"

        //Seta a variável para falso
        nomeFormularioOk = false;

    } else {  //Se ambos estiverem ok
        //Retira a mensage do small
        nomeSobrenomeValidacao.innerText = ""

        //Seta o BG do input como Sucesso
        nomeSobrenome.style.backgroundColor = "#50D48084"

        //Retorna o botão para "habilitado"
        botaoSalvar.removeAttribute("disabled");
        botaoSalvar.style.backgroundColor = "#0b5ed7"

        //Seta a variável de controlle do formulário
        nomeFormularioOk = true;
    }
});

////////Validando O E-MAIL
email.addEventListener("click", function () {
    console.log("Clicou no campo do E-mail");
    //Altera o fundo do campo ao ser clicado
    email.style.backgroundColor = "#E2DCDC"
});

email.addEventListener("blur", function () {
    console.log("Saiu do campo do email");

    //Pega o elemento Small
    let emailValidacao = document.getElementById('emailValidacao');

    //Altera o fundo do campo ao sair do click 
    email.style.backgroundColor = "#FFFFFF"

    //Valida se o campo É VAZIO
    if (!email.value) { //Se não foi preenchido
        // troca o fundo
        email.style.backgroundColor = "#E6626299"

        //Seta a mensage no small (e configura)
        emailValidacao.innerText = "Campo obrigatório"
        emailValidacao.style.color = "#D53A3A"
        emailValidacao.style.fontWeight = "bold"

        //Bloqueado o botão de salvar
        botaoSalvar.setAttribute("disabled", true);
        //Trocando a cor do botão
        botaoSalvar.style.backgroundColor = "#908E8E"

        //Seta a variável para falso
        emailFormularioOk = false;

    //Valida de o email está em um formato correto
    } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        // troca o fundo
        email.style.backgroundColor = "#E6626299"

        //Seta a mensage no small (e configura)
        emailValidacao.innerText = "E-mail inválido"
        emailValidacao.style.color = "#D53A3A"
        emailValidacao.style.fontWeight = "bold"

        //Bloqueado o botão de salvar
        botaoSalvar.setAttribute("disabled", true);
        //Trocando a cor do botão
        botaoSalvar.style.backgroundColor = "#908E8E"

        //Seta a variável para falso
        emailFormularioOk = false;

    } else {
        //Se o campo estiver ok
        //Retira a mensage do small
        emailValidacao.innerText = ""

        //Seta o BG do input como Sucesso
        email.style.backgroundColor = "#50D48084"

        //Retorna o botão para "habilitado"
        botaoSalvar.removeAttribute("disabled");
        botaoSalvar.style.backgroundColor = "#0b5ed7"

        //Seta a variável de controlle do formulário
        emailFormularioOk = true;
    }
});