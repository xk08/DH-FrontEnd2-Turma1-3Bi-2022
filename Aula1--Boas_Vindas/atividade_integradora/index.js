/* 
Prof Marcos Martins - Front end 2
Possível solução para a atividade da Aula 1 (Boas-vindas) 
*/

let numeros = [1, 2, 4, 8];

let somaTotalNumeros = 0;

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    somaTotalNumeros = somaTotalNumeros + numeros[i];
    //somaTotalNumeros += numeros[i]; //Outra maneira de somar
    console.log(somaTotalNumeros);
}

console.log("A soma toda dos números foi: " + somaTotalNumeros);