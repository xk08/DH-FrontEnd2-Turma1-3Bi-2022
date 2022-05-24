//@@@@@@@@ [1] - Modelos de texto  - Template Strings
console.log("Olá, usuário Marcos");

let nomeUsuario = "Marcos";
//Concatenando
console.log("Olá, usuário " + nomeUsuario);

//Interpolação (Com ASPAS-CRUZADAS)
console.log(`Olá, usuário ${nomeUsuario} \n`);

//Expressões dentro do template
console.log(`O resultado da soma foi: ${4 + 4} \n`);

//Criando função que retorna uma string
function nomeUsuarioFuncao() {
    return nomeUsuario;
}
console.log(`Olá, usuário ${nomeUsuarioFuncao()} \n`);

//@@@@@@ [2] - Modificando elementos com o DOM

//1) Precisa-se capturar os elementos do HTML
let h1 = document.querySelector('h1');

//Primeiro exemplo que fizemos
console.log(h1.childNodes[0].data);

//Exibindo o conteúdo
console.log(h1.innerHTML);
console.log(h1.innerText);

// 2) Podemos modificar o conteúdo
//Modificando o conteúdo (textual)
h1.innerHTML = "Informações";
h1.innerText = "Informações 2";

//Modificando o elemento e seu conteúdo
h1.innerHTML = "<h6>Informações</h6>";
h1.innerText = "<h6>Informações</h6>";

//Substitiu o elemento todo
h1.outerHTML = "<h5>Novo titulo</h5>"

//@@@@@@ [3] - Modificando estilos 

// 1) Capturar o elemento
let body = document.querySelector('body');

// 2) Trabalhar com o "style" 
body.style.background - color = "#88e690"; //-> Isso não funciona, precisa ser CamelCase
body.style.backgroundColor = "#88e690";

let h1 = document.querySelector('h1');
h1.style.color = "#CA8122";
h1.style.textAlign = "left";


//@@@@@@ [4] Modificando a classe dos elementos

//1) Capturar a lita de elementos <li>
let listaElementosLI = document.querySelectorAll('li');
console.log(listaElementosLI);

//2) Percorrendo/Iterando sobre a lista
listaElementosLI.forEach(li => {
    console.log(li.innerHTML);
    li.innerHTML = "Novo texto";

    //// Trabalhando com o ClassList

    //Verificando as classes do item
    console.log(li.classList); 

    //3) Modificando o elemento - Adicionando uma nova classe
    li.classList.add('novo-li') // Não precisa o ponto
    console.log(li.classList); 

    //Verifica se existe uma classe no elemento em questão
    console.log(li.classList.contains('novo-li')); //Retorna um booleano
});


//REMOVENDO uma classe de um elemento específico
console.log(listaElementosLI);
console.log(listaElementosLI[3]);

listaElementosLI[3].classList.remove('novo-li');
console.log(listaElementosLI[3].classList);

listaElementosLI[0].classList.remove('novo-li');