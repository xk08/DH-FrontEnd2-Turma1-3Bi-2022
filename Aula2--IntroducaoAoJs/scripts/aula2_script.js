/* @@@ EXIBIÇÃO E CAPTURA DOS DADOS DO USUÁRIO 
- Alert()
- Confirm()
- Prompt()
*/

//Exibe alerta na tela, sem nenhuma mensagem definida previamente
alert();

let nome = "Pablo"
alert("Olá " + nome);

//Solicita em tela, uma confirmação do usuário
let retornoConfirm = confirm("Deseja realemnte sair da aplicação?"); //True ou false
console.log(retornoConfirm);

//Verificando a opção selecionada
if (retornoConfirm) { //Caso true
    alert("Saindo da aplicação...")
} else { //Caso false
    alert("Continua logado")
}

//Forma de capturar algum "dado/informação" do usuário em tela
let retornoPrompt = prompt("Informe um número inteiro");
console.log(retornoPrompt);

//Coverte de String/Inteiro
let numeroConvertido = parseInt(retornoPrompt);

//Coverte de String/Float
let numeroConvertid2 = parseFloat(retornoPrompt);

//Outra forma de fazer a conversão
let numeroConvertido3 = Number(retornoPrompt);

//Realizando uma soma com os valores
let numero1 = 10.5;
let resultadoSoma = numero1 + numeroConvertido;
console.log(resultadoSoma);

//Trabalhando com núemros aleatorios
let numeroAleatorio = Math.random() * 3 + 1; // 3 máximo e 1 minimo

//Capturando apenas o número inteiro (sem as casas decimais)
let numeroInteiro = Math.floor(numeroAleatorio);
console.log(numeroInteiro);

/* @@@ Sugestão de como implementar a atividade prática da aula
1 - Capturar a escolha de vocês (1, 2 ou 3)
    - Converter pra inteiro, guardar em uma variável
2 - Capturar a escolha da "máquina".
    - Fazer isso, usando o Math.Random() com intervalo;
3 - Testar (Switch e IF) quem foi o ganhador da rodada, ou se empatou
4 - Guardar em variáveis separadas, quem ganhou cada rodada
5 - Ao final, verificar e declarar um campeão (melhor de 2 rodadas)
*/