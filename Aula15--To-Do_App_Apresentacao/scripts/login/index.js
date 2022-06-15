/* Captura os inputs que serão manipulados */
let emailLogin = document.getElementById("inputEmail");
let passwordLogin = document.getElementById("inputPassword");
let botaoLogin = document.getElementById("botaoLogin");

/* Altera o botão de acesso quando está bloqueado */
botaoLogin.style.backgroundColor = "#979292A1";
botaoLogin.innerText = "Bloqueado";

/* Define um objeto para o usuário */
let objetoUsuario = {
    email: "",
    password: ""
}

/* Adiciona o evento de click ao botão */
botaoLogin.addEventListener("click", function (evento) {

    //Verifica a validação
    if (validaLogin(emailLogin.value, passwordLogin.value)) {

        evento.preventDefault();

        /* Normalização das informações*/
        emailLogin = normalizaTextoRetiraEspacos(emailLogin.value);
        passwordLogin = normalizaTextoRetiraEspacos(passwordLogin.value);

        //Atribui as informações normalizadas ao objeto do usuário (em JS)
        objetoUsuario.email = emailLogin;
        objetoUsuario.password = passwordLogin;

        //Transforma o objeto JS em objeto JSON(textual)
        let objetoUsuarioEmJson = JSON.stringify(objetoUsuario);

        console.log(objetoUsuarioEmJson);
    }

});


/* Verificando o input de email */
emailLogin.addEventListener("keyup", () => {

    let validacaoEmail = document.getElementById("validacaoEmail");

    if (emailLogin.value) {
        validacaoEmail.innerText = ""
        emailLogin.style.border = "2px solid transparent "
    } else {
        validacaoEmail.innerText = "Campo obrigatório"

        emailLogin.style.border = "2px solid #E9554EBB"
    }
    validaLogin(emailLogin.value, passwordLogin.value);

});

/* Verificando o input de senha */
passwordLogin.addEventListener("keyup", () => {

    let validacaoSenha = document.getElementById("validacaoSenha");

    if (passwordLogin.value) {
        validacaoSenha.innerText = ""
        passwordLogin.style.border = "2px solid transparent"
    } else {
        validacaoSenha.innerText = "Campo obrigatório"
        passwordLogin.style.border = "2px solid #E9554EBB"
    }
    validaLogin(emailLogin.value, passwordLogin.value);
});


/* Função que valida o acesso na página de login */
function validaLogin(email, password) {

    if (email && password) {
        //True
        botaoLogin.removeAttribute("disabled")
        botaoLogin.style.backgroundColor = "#7898FF";
        botaoLogin.innerText = "Acessar";
        return true;

    } else {
        //False
        botaoLogin.setAttribute("disabled", true)
        botaoLogin.style.backgroundColor = "#979292A1";
        botaoLogin.innerText = "Bloqueado";
        return false;
    }
}