//### PRIMEIRA PARTE DA AULA

//Criando um objeto .JS
let usuario = {
    nome: "Marcos",
    idade: 34,
    //objeto interno no objeto usuário
    endereco: {
        cidade: "São Borja",
        estado: "RS"
    }
}

//@@@ FOR - IN

//Percorrendo o objeto e suas informações
for (let atributo in usuario) {
    console.log(atributo); //Apresenta apenas a "chave" da propriedade (sem o valor)
    console.log(usuario[atributo]); //apresenta o valor da propriedade
}

//Definindo um array em .js
let arrayFrutas = ["Limão"];

//Acrescentando informações no array de frutas
arrayFrutas.push("Banana");
arrayFrutas.push("Abacate");
arrayFrutas.push("Pera");
console.log(arrayFrutas);

//Estrutura classica do For
for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

//@@@ FOR - OF
for (let fruta of arrayFrutas) {
    console.log(fruta);
}

//@@@ FOREACH
//Percorrendo com ForEach

//Define uma função
function exibeFrutas (frutaRecebida) {
    console.log(frutaRecebida);
}

//Informa a função como parametro para o forEach
arrayFrutas.forEach(exibeFrutas);

//Define a função sem nenhuma assinatura no forEach
arrayFrutas.forEach(function(fruta){
    console.log(fruta);
});

//Usando Arrow Function ( => )
arrayFrutas.forEach( fruta => {
    console.log(fruta);
    console.log("Outra ação...");
});

//Usando Arrow Functions => sem o escopo da função (apena uma ação prevista)
arrayFrutas.forEach( fruta =>  console.log(fruta));

//@@@ MAP

//Percorrendo com map
let novoArray = arrayFrutas.map(fruta => {
    console.log(fruta);
    return fruta.toUpperCase(); //Converte o valor textual para letras maiúsculas
}
);

//O map retorna um novo array com as informnações... o foreach não!
console.log(novoArray);

//### SEGUNDA PARTE DA AULA
function conhecendoLoops() {
    let usuario = {
        nome: "Marcos",
        idade: 34,
        endereco: {
            cidade: "São Borja",
            estado: "RS"
        }
    }

    let arrayFrutas = ["Limão"];

    arrayFrutas.push("Banana");
    arrayFrutas.push("Abacate");
    arrayFrutas.push("Pera");

    let novoArray = arrayFrutas.map(fruta => {
        console.log(fruta);
        return fruta.toUpperCase();
    }
    );

    console.log(novoArray);

}
let novaVariavel = "Algum valor";

//Exportando um único recurso deste script
export default conhecendoLoops;

//Exportando recursos diferentes deste script (função e variável)
export { conhecendoLoops, novaVariavel };