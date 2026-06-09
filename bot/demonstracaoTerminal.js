const readline = require('readline');
const atendimento = require('./atendimento');

// Configura a interface de leitura e escrita do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=========================================");
console.log("CHATBOT INFORMATIVO FARMÁCIA");
console.log("Este código simula a interação do chatbot via terminal!");
console.log("Digite 'sair' a qualquer momento para encerrar.");
console.log("=========================================\n");

// força o envio da mensagem inicial simulando uma entrada vazia
console.log("Bot:\n" + atendimento.gerarResposta(""));

// função recursiva para manter a conversa em loop
function iniciarConversa() {
    rl.question('\nVocê: ', (textoUsuario) => {
        
        // condição de parada do nosso script
        if (textoUsuario.toLowerCase() === 'sair') {
            console.log("\nEncerrando o teste. Até logo!");
            rl.close();
            return;
        }

        // passa o texto digitado para a sua lógica de atendimento
        const respostaDoBot = atendimento.gerarResposta(textoUsuario);
        
        // imprime a resposta formatada
        console.log('\nBot:\n' + respostaDoBot);

        // chama a si mesma para aguardar a próxima mensagem
        iniciarConversa();
    });
}

//loop
iniciarConversa();