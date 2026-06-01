// Carrega as variáveis do arquivo .env
require('dotenv').config(); 

const express = require('express');
const atendimento = require('./atendimento');

const app = express();
// Configura o Express para entender requisições em formato JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Endpoint do Webhook (Método POST) 
app.post('/webhook', (req, res) => {
    const payload = req.body;

    // Verifica se a estrutura do payload contém uma mensagem do usuário 
    if (payload.entry && payload.entry[0].changes && payload.entry[0].changes[0].value.messages) {
        
        const mensagemRecebida = payload.entry[0].changes[0].value.messages[0];
        const numeroUsuario = mensagemRecebida.from;
        const textoUsuario = mensagemRecebida.text.body;

        // Chama a lógica de atendimento passando o texto que o usuário enviou
        const respostaDoBot = atendimento.gerarResposta(textoUsuario);

        console.log(`Mensagem recebida de ${numeroUsuario}: ${textoUsuario}`);
        console.log(`Resposta gerada para o envio: \n${respostaDoBot}`);

        // aviso do arquivo chatbot.pdf: O envio de volta ao usuário exige uma chamada POST separada 
        // para a API do WhatsApp. O código dessa chamada iria aqui. 
    }

    // O servidor deve responder com um status 200 OK para confirmar o recebimento
    res.sendStatus(200);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});