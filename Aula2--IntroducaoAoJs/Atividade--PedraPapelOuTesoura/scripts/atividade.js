/* Prof - Marcos Martins - Front end 2 - DH
-> Possível implementação para a atividade da Aula 2 (Pedra, Papel, ou Tesoura)
 */

//Variáveis globais
var pontosUsuario = 0;
var pontosMaquina = 0;

function capturaMaoUsuario() {
    let maoUsuario = parseInt(prompt("Pedra(1), Papel(2) ou Tesoura(3)?"));
    return maoUsuario;
}

function capturaMaoMaquina() {
    let random = parseInt(Math.random() * 3 + 1);
    return random;
}

//Função principal (Chamada pelo HTML)
function jogar() {

    //Captura os valores informados pelos jogadores
    let maoMaquina = capturaMaoMaquina();
    let maoUsuario = capturaMaoUsuario();

    console.log("Sua mão foi:" + maoUsuario);
    console.log("A mão da máquina foi: " + maoMaquina);
    console.log("\n");

    //Escolhe de acordo com a mão do usuário
    switch (maoUsuario) {
        case maoMaquina: //Se for igual ao do usuário, é empate
            alert("RODADA: Empatou! Ambos jogaram a mesma mão. \nNinguém pontuou!");
            break;

        case 1: //Pedra
            if (maoMaquina == 2) { //Papel
                pontosMaquina++ //Incrementa a pontução da máquina
                alert("RODADA: A máquina ganhou com: Papel! (você: Pedra)");
            } else { //Tesoura
                pontosUsuario++ //Incrementa a pontução do usuário
                alert("RODADA: Você ganhou com: Pedra! (máquina: Tesoura)");
            }
            break;

        case 2: //Papel
            if (maoMaquina == 1) { //Pedra
                pontosUsuario++
                alert("RODADA: Você ganhou com: Papel! (máquina: Pedra)");
            } else { //Tesoura
                pontosMaquina++
                alert("RODADA: A máquina ganhou com: Tesoura! (você: Papel)");
            }
            break;

        case 3: //Tesoura
            if (maoMaquina == 1) { //Pedra
                pontosMaquina++
                alert("RODADA: A máquina ganhou com: Pedra! (você: Tesoura)");
            } else { //Papel
                pontosUsuario++
                alert("RODADA: Você ganhou com: Tesoura! (máquina: Papel)");
            }
    }

    console.log("Pontos do usuário: " + pontosUsuario);
    console.log("Pontos da máquina: " + pontosMaquina);
    console.log("\n")

    //Chama função que verifica e exibe o ganhador da partida
    elegerGanhador();

}

function elegerGanhador() {
    if (pontosUsuario == 2) {
        alert("FINAL: Você ganhou da máquina!");
    } else if (pontosMaquina == 2) {
        alert("FINAL: A máquina ganhou de você!");
    }
}

function resetarPontuacao() {
    pontosUsuario = 0;
    pontosMaquina = 0;
}