function infoGripe() {
    return `A **Gripe (Influenza)** é uma infecção viral respiratória aguda. Os sintomas mais comuns são:
**Febre alta:** Geralmente acima de 38°C.
**Dores musculares:** Sensação de corpo dolorido.
**Dor de cabeça:** Intensa e persistente.
**Tosse seca:** Irritativa e sem produção de muco.
**Dor de garganta:** Pode variar de leve a intensa.

> **Importante:** A gripe pode levar a complicações sérias. Se os sintomas forem graves ou persistirem, procure um médico.`;
}

function infoRinite() {
    return `A **Rinite Alérgica** é uma reação do sistema imunológico a partículas inaladas, como poeira, pólen ou pelos de animais. Os sintomas incluem:
**Espirros:** Frequentes e em sequência.
**Coriza:** Nariz escorrendo com secreção clara.
**Coceira:** Principalmente no nariz, olhos e céu da boca.
**Congestão nasal:** Dificuldade para respirar pelo nariz.

> **Dica:** Evitar o contato com o alérgeno é a melhor forma de prevenção.`;
}

function infoGastro() {
    return `A **Gastroenterite** é uma inflamação do trato gastrointestinal (estômago e intestinos), geralmente causada por vírus ou bactérias. Os principais sintomas são:
**Diarreia:** Evacuações líquidas e frequentes.
**Vômitos:** Podem ocorrer junto com a diarreia.
**Dor abdominal:** Cólicas e desconforto na barriga.
**Febre e calafrios:** Em casos de infecção.

> **Cuidado:** A desidratação é um risco importante na gastroenterite. Beba bastante líquido, como água, soro caseiro ou água de coco.`;
}

// Exportamos as funções para que o atendimento.js possa usá-las
module.exports = {
    infoGripe,
    infoRinite,
    infoGastro
};