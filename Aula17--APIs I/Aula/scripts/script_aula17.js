let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (quantidadeFormulario.value != "") {
        
        //Documentação da API: https://dog.ceo/dog-api/documentation

        /* Usando o fetch para acessar os recursos da API */
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`)//Endpoint da API
            .then(
                function (resultado) {
                    return resultado.json() //Faz a conversão de JSON presente no Body para JS
                }
            ).then(
                function (resultado) {
                    //Tem acesso as informações da requisição nesta chamada do then
                    //Percorre a lista de imagens
                    for (let dog of resultado.message) {
                        console.log(dog);

                        //Cria o elemento imagem
                        let img = document.createElement("img")
                        img.src = dog;

                        //Adiciona ao elemento pai
                        exibeResultado.appendChild(img);
                    }
                }
            ).
            catch(
                //Trata possiveis erros na consulta da API
                function (erro) {
                    console.log(erro);
                }
            );

    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}