# 💊 Chatbot Farmácia

## 📋 Sobre o Projeto

O Chatbot Farmácia é uma aplicação desenvolvida em Node.js com o objetivo de fornecer informações básicas sobre doenças comuns através de um atendimento automatizado via WhatsApp.

O sistema recebe mensagens dos usuários por meio de um Webhook e responde com informações previamente cadastradas sobre sintomas e cuidados relacionados a determinadas doenças.

⚠️ Este chatbot possui caráter exclusivamente informativo e não substitui a orientação de profissionais da saúde.

---

## 🚀 Funcionalidades

* Recebimento de mensagens via Webhook do WhatsApp;
* Atendimento automatizado;
* Menu interativo com opções numéricas;
* Informações sobre:

  * Gripe (Influenza);
  * Rinite Alérgica;
  * Gastroenterite;
* Estrutura modular para fácil manutenção e expansão.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* JavaScript
* API WhatsApp Business (Webhook)

---

## 📂 Estrutura do Projeto

```text
chatbot-farmacia/
│
├── bot/
│   ├── index.js
│   ├── atendimento.js
│   ├── respostas.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Como Funciona

Quando o usuário envia uma mensagem para o WhatsApp conectado ao chatbot:

1. A API envia a mensagem para o Webhook.
2. O servidor recebe o conteúdo da mensagem.
3. O módulo `atendimento.js` identifica a opção escolhida.
4. O módulo `respostas.js` retorna a resposta correspondente.
5. A resposta é enviada ao usuário.

### Menu Inicial

```text
Olá!

Sou um assistente virtual informativo.
Posso te ajudar a conhecer os sintomas de algumas doenças comuns.

Sobre qual doença você gostaria de saber mais?

1 - Gripe (Influenza)
2 - Rinite Alérgica
3 - Gastroenterite
```

---

## 📖 Informações Disponíveis

### 1️⃣ Gripe (Influenza)

* Febre alta;
* Dores musculares;
* Dor de cabeça;
* Tosse seca;
* Dor de garganta.

### 2️⃣ Rinite Alérgica

* Espirros frequentes;
* Coriza;
* Coceira no nariz, olhos e céu da boca;
* Congestão nasal.

### 3️⃣ Gastroenterite

* Diarreia;
* Vômitos;
* Dor abdominal;
* Febre e calafrios.

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/louiefelipe/chatbot-farmacia.git
```

Acesse a pasta do projeto:

```bash
cd chatbot-farmacia/bot
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as variáveis necessárias.

Inicie o servidor:

```bash
node index.js
```

O servidor será iniciado na porta configurada no arquivo `.env` ou na porta 3000 por padrão.

💻 Para testar interação no terminal:
Acesse a pasta do projeto:

```bash
cd chatbot-farmacia/bot
```

Instale as dependências:
```bash
npm install express dotenv
```
Inicie o servidor:
```bash
node demonstracaoTerminal.js
```

---

## 📡 Endpoint

### Webhook

```http
POST /webhook
```

Responsável por receber as mensagens enviadas pela API do WhatsApp.

---

## 🎯 Objetivo Acadêmico

Este projeto foi desenvolvido para fins educacionais, com o objetivo de aplicar conceitos de:

* Desenvolvimento Backend;
* APIs REST;
* Webhooks;
* Node.js;
* Express.js;
* Integração com WhatsApp Business API;
* Estruturação modular de aplicações JavaScript.

---

## 👨‍💻 Autor

Louie Felipe
Rafael Setragni

GitHub:
https://github.com/louiefelipe
