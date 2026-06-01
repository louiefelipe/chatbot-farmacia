const respostas = require('respostas.js');

function mensagemInicial() {
    return `Olá!
Sou um assistente virtual informativo.
Posso te ajudar a conhecer os sintomas de algumas doenças comuns.
Sobre qual doença você gostaria de saber mais?
1 - Gripe (Influenza)
2 - Rinite Alérgica
3 - Gastroenterite`;
}

// Lógica Principal que direciona o fluxo com base na resposta
function gerarResposta(texto) {
  
    switch (texto.trim()) {
        case "1":
            return respostas.infoGripe();
        case "2":
            return respostas.infoRinite();
        case "3":
            return respostas.infoGastro();
        default:
            return mensagemInicial();
    }
}

module.exports = {
    gerarResposta
};