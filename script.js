const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas =[
{
    enunciado: "Você está vivenciando uma enchente, o que você faria?",
    alternativa:[
        "Continuava em casa",
        "Saia a procura de ajuda"
    ]
},
{
    enunciado: "Você escolheu ficar em casa, mas a aguá começou à invadir a sua casa. Qual decisão você tomaria?"
    alternativa:[
        "Subir no telhado e esperar ajuda",
        "Sair nadando"
    ]
},
{
    enunciado: "Você escolheu subir no telhado e esperar alguém lhe socorrer. Dias se passaram e você continuou no telhado com frio, embaixo de chuva, passando fome e sede. Você tem tuas escolhas:",
    alternativa:[
        "Desistir de viver e entrar dentro da aguá para morrer afogado.",
        "Continuar esperando por ajuda."
    ]
},
{
    enunciado: "pergunta 1",
    alternativa:[
        "Alternativa 1",
        "Alternativa 2"
    ]
},
{
    enunciado: "pergunta 1",
    alternativa:[
        "Alternativa 1",
        "Alternativa 2"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas. textContent = perguntaAtual.enunciado
}

mostraPergunta();