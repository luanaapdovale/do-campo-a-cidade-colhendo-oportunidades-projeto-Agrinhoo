
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe sobre o cultivo do fumo?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Não!" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "O fumo é plantado nos finais de julho ao começo de agosto. Em qual mês se inicia a colheita?",
        alternativas: [
            {
                texto: "Se inicia em outubro ou começo de novembro, finalizando em dezembro ou começo de janeiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "Se inicia no final de agosto, finalizando em outubro.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: "Muito bem! Se inicia em outubro, e após a colheita o que é feito?",
        alternativas: [
            {
                texto: "Após a colheita, as folhas do fumo estufa ou as plantas do fumo galpão são acondicionadas em unidades de cura onde sofrem um processo de cura, ou seja, perda de água, mudança de cor e uma série de transformações bioquímicas.",
                afirmacao: "afirmação"
            },
            {
            texto: "Após a colheita, é levado para a indústria do tabagismo",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Após ele ficar pronto. Se deve fazer a separação, como ela deve ser feita?",
        alternativas: [
            {
                texto: "Faz a separação das folhas por qualidade: cor e tamanho definem a classificação",
                afirmacao: "afirmação"
            },
            {
                texto: "Deve se separar de qualquer jeito",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Após a separação, o fumo é levado para uma indústria, e o kilo é vendido em média por R$ 18,12. Conseguiu entender um pouco como funciona?",
        alternativas: [
            {
                texto: "Sim, obrigado!",
                afirmacao: "afirmação"
            },
            {
                texto:"Não!",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado! :)";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
