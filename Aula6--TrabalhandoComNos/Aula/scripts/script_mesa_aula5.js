/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    let itemsList = document.querySelectorAll('.item');


    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');
        //2) Percorrendo com o ForEach
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

    } else { //Caso seja false, ou seja, não está selecionado

        /* Remove as classes adicionadas anteriormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}