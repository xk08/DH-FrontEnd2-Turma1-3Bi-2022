console.log(window);
console.log(window.document);
console.log(document); //posso suprimir a termo "window"

//BODY -> "Você poderia obter este elemento?"
console.log(document.body.children[1].children[1].children[0].children[0].childNodes[0].data)

//Pegando o mesmo elemento de outra forma (com o querySelector)

//PEGANDO PELO TIPO DE ELEMENTO
let li1 = document.querySelector('li'); //Busca o elemento HTML e n a classe do elemento
console.log(li1.children[0].childNodes[0].data);
console.log(li1.innerText); //Outra forma de pegar o texto -> Veremos na aula 7 a diferença e quando usar

//@@ PEGANDO PELO ID
 let idItem1 = document.getElementById('item1');
console.log(idItem1.innerText); 

//outra forma de pegar pelo id
let idItem1 = document.querySelector('#item1');
console.log(idItem1.innerText); 

//@@ PEGANDO PELA CLASSE
let divConteudo = document.querySelector('conteudo'); //null, pq n é a classe 
let divConteudo = document.querySelector('.conteudo'); //Pega a primeira ocorrência
console.log(divConteudo);

//@@ Outra fora de pegar pela classe... mas olhando pro ELEMENTO PAI
let body = document.body
console.log(body.getElementsByClassName("conteudo")); // não vai o ponto no inicio


//@@ PEGANDO TODOS OS ELEMENTOS (Exibindo os cards/articles
let listaDeArticles = document.querySelectorAll('article'); //Passo o elemento
console.log(listaDeArticles);
console.log(listaDeArticles[3]); //Pega todo o article do "colorido"
console.log(listaDeArticles[3].children[0].innerText); //Pega o texto "Colorido!"

////@@ PEGANDO TODOS OS ELEMENTOS - PERCORRENDO -  ITERANDO
for (let article of listaDeArticles) {
    console.log(article.children[0].innerText); //Exibe os titulos dos articles
}

//@@ Pegando um item especifico por algum condição -> PELO ID
let cardPegoPeloId;
for (let article of listaDeArticles) {
    if (article.id == "card1") {
        cardPegoPeloId = article;
    }
}
