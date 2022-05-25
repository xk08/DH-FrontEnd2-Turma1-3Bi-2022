//Capturando os "cards" com os felinos
let items = document.getElementsByClassName("item"); //similar ao querySelectorAll(.classe)

//Capturando o elemento pai
let elementoPai = document.getElementById("elementoPai");

//Removendo "cards" do elemento pai (removendo pela posição)
elementoPai.removeChild(items[2]);
elementoPai.removeChild(items[3]);

//Outras maneiras de remover um elemento da lista
elementoPai.firstElementChild.remove(); //remove o primeiro filho
elementoPai.lastElementChild.remove(); //remove o último filho

//criando um novo elemento HTML com o JS
let novaDiv = document.createElement("div");
console.log(novaDiv);

novaDiv.appendChild("Novo texto"); //Da erro, pois o metodo espera receber um nó/node

//Criando novo elemento do tipo "text"
let textoDiv = document.createTextNode("Novo texto");
novaDiv.appendChild(textoDiv);

let titulo = "Novo felino";
let descricao = "Velit sunt incididunt deserunt nulla Lorem dolor adipisicing quis velit ad quis. Exercitation nostrud cillum magna mollit exercitation dolor mollit do anim. Nulla ea do eiusmod do laborum incididunt commodo enim deserunt aliquip cupidatat est dolor."
let img = "./imagens/tiger.jpg"

//Atribuindo as novas tags para a div recem criada
novaDiv.innerHTML = `
<img src=${img}>
      <h2>${titulo}</h2>
      <p>${descricao}</p>
`
//Adicionando uma classe ao novo elemento
novaDiv.classList.add("item");

//Insere no final da lista (por padrão)
elementoPai.appendChild(novaDiv);

//Determina uma condição onde "Insere antes de um determinado elemento"
//Parametro da esquerda: Novo elemento - Parametro da direita: Elemento que será comparado
elementoPai.insertBefore(novaDiv, elementoPai.children[3]);

//Insere antes do primeiro elemento encontrado
elementoPai.insertBefore(novaDiv, elementoPai.firstElementChild);