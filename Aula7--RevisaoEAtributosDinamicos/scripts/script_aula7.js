let listaImgFelinos = document.querySelectorAll("img");
console.log(listaImgFelinos);

listaImgFelinos.forEach(felino => {
    //verificando os atributos
    console.log(felino.attributes);

    // HASATTRIBUTE -> Verifica se o atributo existe
    console.log(felino.hasAttribute("src")); // true
    console.log(felino.hasAttribute("teste")); // false

    // GET-ATTRIBUTE -> Captura o atributo
    let atributoPego = felino.getAttribute("src");
    //let atributoPego = felino.getAttribute("teste"); //Retorna null, pois não existe
    console.log(atributoPego);

    //outra forma de capturar e alterar
    console.log(felino.src);  //pago o caminho total

    //SET-ATTRIBUTE -> Cria um novo atributo
    //esquerda: tipo do atributo - direita: valor
    felino.setAttribute("novoAtributo", "novoAtributo");
    console.log(felino.attributes);

    //felino.setAttribute("src", "novoAtributo");
    console.log(felino.attributes);

    //Eu poderia definir uma "classe" por aqui
    felino.setAttribute("class", "nova-classe");

    //ou um id
    felino.setAttribute("id", "id01");
    console.log(felino.attributes);

    //REMOVE-ATTRIBUTE -> Remove um atributo
    //felino.removeAttribute("src");
});

//Quero adicionar um novo atributo pro Leão - Um link que apresenta alguma informação complementar

// 1) Capturo o card do leão
let cardLeao = listaImgFelinos[1].parentElement

// 2) Criar o novo elemento
let a = document.createElement('a')
a.innerText = "Clique para conhecer mais"

// 3) Setando os atributos
a.setAttribute('href', "https://www.ikoporan.org/pt-br/voluntariado/conservacao-de-leoes/");

//Abrir em abas diferentes na mesma página (Usando mais um atributo)
a.setAttribute('target', "_blank");
cardLeao.appendChild(a)