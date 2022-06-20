
let validacao = true;

//Define um objeto do tipo JS
let objetoUsuario = {
    nome: "Usuario de promisses",
    endereco: {
        cidade: "São Paulo",
        uf: "SP"
    }
}

//Converte o objeto JS para JSON (textual)
let objetoUsuarioRecebido = JSON.stringify(objetoUsuario)

/* Criando a promisse e sua estrutura */
let novaPromisse = new Promise(function (resolve, reject) {

    //Simulando que a requisição "demora 3 segundos" para acontecer
    setTimeout(() => {
        if (validacao) { //Condição de validação
            //Executa em caso de sucesso
            resolve(objetoUsuarioRecebido);
        } else {
            //Rejeita em caso de algum problema4
            reject("A promisse foi rejeitada");
        }
    }, 3000);
});

//Resolvendo a promisse
novaPromisse.then(
    function (resultado) {
        console.log("Primeiro then");
        console.log(resultado);
        return JSON.parse(resultado); //Retorna o resultado para o proximo then() aninhado
    }
).then(
    //Recebe o retorno do primeiro then()
    function (resultado) {
        console.log("Segundo then");
        console.log(resultado);
    }

    //Captura possíveis erros na resolução da promisse
).catch(
    function (erro) {
        console.log(erro);
    }
);