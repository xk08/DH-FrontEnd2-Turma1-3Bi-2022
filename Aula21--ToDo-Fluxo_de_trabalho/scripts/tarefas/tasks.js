let tokenJwt;

/* Função é chamada automaticamente ao carregar a página de tarefas */
onload = function () {

    //Busca o token do usuário no Storage
    tokenJwt = sessionStorage.getItem("jwt");

    //Verifica se o token existe/é valido
    if (!tokenJwt) { //Caso NÃO seja...

        alert("Você não tem permissão de acesso.")
        //Direciona o usuário para a tela de Login novamente
        location.href = "index.html";

    } else { //Caso SEJA válido

        //Chama a função que busca os dados do usuário na API
        buscaDadosUsuario()
    }
}

/* Função do tipo assincrona */
async function buscaDadosUsuario() {

    /* Cria o arquivo de configuração */
    let configRequest = {
        headers: {  //Cabeçalho da requisição
            "Authorization": tokenJwt  //Token JWT esperado pela API
        },
    }

    try { //Tenta executar as seguintes ações...

        let resposta = await fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", configRequest);

        if (resposta.status == 200) {
            let respostaConvertida = await resposta.json();
            //console.log(respostaConvertida);

            //Chama a função que exibe/altera o nome do usuário e envia o objeto capturado na API
            exibeNomeUsuario(respostaConvertida);

        } else {
            throw "Problema ao buscar o usuário na API";
        }
    } catch (error) { //Caso tenha algum problema/erro...
        console.log(error);
    }
}

/* Altera as informações do usuário na página */
function exibeNomeUsuario(objetoUsuario) {
    let p = document.getElementById("nomeUsuario");
    p.innerText = `${objetoUsuario.firstName} ${objetoUsuario.lastName}`
}