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

        //Segue a execução da página....
    }
}