//@@@ sessionStorage -> Armazena informações na SESSÃO do navegador

// Recurso de janela.. de página
console.log(window.sessionStorage) //Posso omitir a palavra window
console.log(sessionStorage)

//@@ setItem -> Maneira de armazenar
sessionStorage.setItem("1", "teste 1");
sessionStorage.setItem("2", "teste 2");
sessionStorage.setItem("3", "teste 3");
console.log(sessionStorage)


//@@@ localStorage -> Armazenar informações na LOCAIS no navegador
//Persistem até que elas sejam apagadas pelo usuário ou pelo navegador

//Tipos de dados
let numero1 = false; //Vai salvar como String
let numero2 = 8;
let numero3 = 23;//Vai salvar como String

//@@@ setItem -> Forma de armazenar (settar)
localStorage.setItem(1, numero1);
localStorage.setItem(2, numero2);
localStorage.setItem(3, numero3)

//@@ Atualizando um valor, re-escrevendo essse valor
localStorage.setItem(1, "Novo valor") //passando a mesma chave (id)

//Quantos registros existem no Storage?
console.log(localStorage.length)

//@@@ setItem ->
//Capturar um registro específico
let registroCapturado = localStorage.getItem(2);
console.log(registroCapturado);

//Como capturar todos, percorrer todos os rgistros ?
for (let item = 1; item <= localStorage.length; item++) {
   console.log(localStorage.getItem(item));
}

//@@@ removeItem ->
//REMOVER UM registro do Storage
localStorage.removeItem("2");

//REMOVER TODOS os registros de uma vez
localStorage.clear();

///@@@@ E se eu quisesse salvar um OBJETO? no Storage
let usuario = {
   nome: "Marcos",
   idade: 34,
   professor: true
}

localStorage.setItem(4, usuario); //Assim salva a string "objeto" e eu não consigo acessar as propriedades dela...

//@@@ JSON
//Convertendo o objeto JS para notação JSON
let objetoConvertidoParaJson = JSON.stringify(usuario);
console.log(objetoConvertidoParaJson);

localStorage.setItem(4, objetoConvertidoParaJson);

//Capturando essas informações
let objetoCapturadoEmjson = localStorage.getItem(4);

console.log("\n\n");
console.log(objetoCapturadoEmjson); //Tenho toda a string
console.log(objetoCapturadoEmjson.nome); //Não consegue acessar a propriedade... pois é uma string

//Preciso fazer a conversão de JSON para JS
let objetoConvertidoParaJs = JSON.parse(objetoCapturadoEmjson);
console.log(objetoConvertidoParaJs);
console.log(objetoConvertidoParaJs.nome);