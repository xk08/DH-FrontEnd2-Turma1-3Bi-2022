//Defindo nova variável e atribuindo uma "string/text" para ela
var nome = "Marcos Vinnicius";

console.log("Olá " + nome);

//Criando um array com informações de diversos tipos (Strings, numericos e booleanos)
let arrayNome = ["Mateus", "Raquel", "Felipe", 8, true];

//Apresenta todo o conteúdo do array
console.log(arrayNome);

//Apresenta o tamanho total do array
console.log(arrayNome.length);

//Apresenta um elementos específico presente no array
console.log(arrayNome[1]);

//Percorrendo as informações do array
for (var i = 0; i < arrayNome.length; i++) {
    let dado = arrayNome[i];
    console.log(dado);
    //console.log(arrayNome[i]); Forma simplificada de fazer
} 