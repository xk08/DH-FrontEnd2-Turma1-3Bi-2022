//Importando recurso único do outro script
import conhecendoLoops from './aula3_script.js';

//Importando mais de um recurso do outro script
import {conhecendoLoops, novaVariavel } from './aula3_script.js';

//Invocando a função que está no outro script
conhecendoLoops();

//Exibindo informação que está no outro script
console.log(novaVariavel);