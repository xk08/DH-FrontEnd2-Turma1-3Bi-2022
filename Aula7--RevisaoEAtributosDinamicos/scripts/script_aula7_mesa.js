/* 
    Imagens da internet:
    TIGRE: https://www.educolorir.com/imagem-tigre-dl21093.jpg
    LEÃO: https://static4.minhalojanouol.com.br/kcsea/produto/multifotos/20210607190444_6624993376_DM.jpg
    LEOPARDO: https://media.istockphoto.com/photos/sunset-leopard-in-a-tree-picture-id1203716465?k=20&m=1203716465&s=612x612&w=0&h=G3RYZe_F55i61G4U-4Dsq5FTeqD_ssxQdaV-_XBbWvo=
*/

//Função é chamada ao clicar no botão no HTML
function alteraImgFelino() {

    //Busca todos os "cards" com os felinos
    let listaFelinos = document.querySelectorAll(".item");

    //Captura a ação do usuário //Converte para inteiro
    let felinoEscolhido = parseInt(prompt("Informe o felino que deseja alterar a imagem:\n1)Tigre, 2)Leão, 3)Leopardo, 4)Pantera-Negra, 5)Jaguar ou 6)Guepardo"));

    //Captura a URL
    let urlFelino = prompt("Informe a nova URL para a imagem");

    if (urlFelino) {
        //Busca o card em específico
        let cardSelecionado = listaFelinos.item(felinoEscolhido);
        //cardSelecionado = listaFelinos[felinoEscolhido - 1]; //Outra forma de buscar

        let imgElement = cardSelecionado.querySelector("img");

        //Setar o atributo novo para o src
        imgElement.setAttribute("src", urlFelino);
        //imgCard.src = urlFelino; //Outra forma de fazer

    } else {
        alert("Uma URL deve informada para a imagem");
    }
}