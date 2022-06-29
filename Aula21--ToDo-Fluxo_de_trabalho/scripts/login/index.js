/* Captura os elementos do formulário de login */
let emailLogin = document.querySelector("#inputEmail");
let passwordLogin = document.querySelector("#inputPassword");
let botaoAcessarLogin = document.querySelector("#botaoAcessarLogin");


/* Altera as caracteristicas do botão acessar */
botaoAcessarLogin.style.backgroundColor = "#979292A1"
botaoAcessarLogin.innerText = "Bloqueado";

//Define um objeto JS para o usuário
let loginUsuario = {
    email: "",
    password: ""
}

//Define um objeto JSON para o usuário
let loginUsuarioJson = "";

/* Adiciona um evento de click ao botão de acessar */
botaoAcessarLogin.addEventListener("click", function (evento) {

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");


    if (validaLogin(emailLogin.value, passwordLogin.value)) {

        evento.preventDefault();

        /* Normalizando os inputs da tela de login */
        emailLogin = normalizaStringUsandoTrim(emailLogin.value);
        passwordLogin = normalizaStringUsandoTrim(passwordLogin.value);

        //Atribui as informações normalizadas ao objeto JS
        loginUsuario.email = emailLogin;
        loginUsuario.password = passwordLogin;

        console.log(loginUsuario);

        //Converte o objeto JS para JSON
        loginUsuarioJson = JSON.stringify(loginUsuario);
        console.log(loginUsuarioJson);

        /////////////////////Comunicando com a API

        //Criando o arquivo de configuração da requisição
        let configRequest = {
            method: "POST", //método HTTP
            headers: {  //Cabeçalho da requisição
                "Content-type": "Application/json" //Tipo do conteúdo enviado
            },
            body: loginUsuarioJson //Corpo da requisição
        }

        //Consummindo a API
        fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", configRequest)
            .then(
                resultado => {
                    //Verifica se ocorreu sucesso ao fazer o login
                    if (resultado.status == 201 || resultado.status == 200) {
                        return resultado.json();
                    } else {
                        //Lança uma exceção em caso de erro no login
                        throw resultado;
                    }
                }
            ).then(
                resultado => {
                    //Ao obter sucesso, chama a função de sucesso do login
                    loginSucesso(resultado);
                    //console.log(resultado);
                }
            ).catch(
                erro => {
                    //Verifica os status de "senha incorreta ou email incorreto"
                    if (erro.status == 400 || erro.status == 404) {
                        //Ao obter algum desses status, chama a função erro no login
                        loginErro("Email e/ou senha inválidos");
                    }

                }
            );

    } else {
        console.log("Login inválido");
    }

});

/* ASYNC/AWAIT -> Outra forma de consumir a API */
/* Precisa-se definir a função como ASSINCRONA, usando o "async" */
async function loginApi() {

    /* Cria o arquivo de configuração */
    let configRequest = {
        method: "POST", //método HTTP
        headers: {  //Cabeçalho da requisição
            "Content-type": "Application/json" //Tipo do conteúdo enviado
        },
        body: loginUsuarioJson //Corpo da requisição
    }

    //Trata possíveis erros na execução 
    try {
        //Utiliza o termo "await" para 'resolver' as promisses, e aguardar a resposta da API
        let resposta = await fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", configRequest);

        if (resposta.status == 201 || resposta.status == 200) {
            //Também é necessário utilizar o "await" pois essa informação tambem é assincrona
            let respostaFinal = await resposta.json();

            //Após ter a resposta da API...
            //Chama a função de sucesso do login
            loginSucesso(respostaFinal);
        } else {
            //Para a execução e direciona para o bloco do "catch"
            throw resposta;
        }
        //Caso ocorra algum erro ou uma exceção seja lançada
    } catch (erro) {
        //Verifica os status de "senha incorreta ou email incorreto"
        if (erro.status == 400 || erro.status == 404) {
            //Ao obter algum desses status, chama a função erro no login
            loginErro("Email e/ou senha inválidos");
        }
    }
}

function loginSucesso(resultadoSucesso) {
    console.log(resultadoSucesso);

    //Salvando o token obtido da API
    sessionStorage.setItem("jwt", resultadoSucesso.jwt);

    //Direciona o usuário para a tela das tarefas
    location.href = "tarefas.html";

}

function loginErro(resultadoErro) {
    console.log(resultadoErro);
    alert(resultadoErro);
}


/* Verifica se ambas as informações do formulário de login, foram preenchidas */
function validaLogin(email, password) {
    if (email && password) {

        /* Ativa o botão de acesso novamente e retorna suas propriedades */
        botaoAcessarLogin.style.backgroundColor = "#7898FF"
        botaoAcessarLogin.innerText = "Acessar";
        botaoAcessarLogin.removeAttribute("disabled");

        return true;
    } else {
        /* Desabilita o botão de acesso e troca suas caracteristicas*/
        botaoAcessarLogin.style.backgroundColor = "#979292A1"
        botaoAcessarLogin.innerText = "Bloqueado";
        botaoAcessarLogin.setAttribute("disabled", true);

        return false;
    }
}

/* Validações no Input de EMAIL */
emailLogin.addEventListener("keyup", () => { //Possível também com o (blur)

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");

    let emailValidacao = document.getElementById("emailValidacao");

    /* Alterandoo texto do Small - Verifica se o campo é nulo/vazio */
    if (!emailLogin.value) {
        emailValidacao.innerText = "Campo obrigatório";

        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid #E9554EBB"
    } else {
        emailValidacao.innerText = "";

        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid transparent"
    }

    validaLogin(emailLogin.value, passwordLogin.value);

});

/* Validações no Input da SENHA */
passwordLogin.addEventListener("keyup", () => {

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");
    let passwordValidacao = document.getElementById("passwordValidacao");

    /* Alterandoo texto do Small - Verifica se o campo é nulo/vazio */
    if (!passwordLogin.value) {
        passwordValidacao.innerText = "Campo obrigatório";

        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid #E9554EBB"

    } else {
        passwordValidacao.innerText = "";

        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid transparent"
    }

    validaLogin(emailLogin.value, passwordLogin.value)

});