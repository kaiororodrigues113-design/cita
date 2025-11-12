const textoCitacaoEl = document.getElementById('textoCitacao');
const autorCitacaoEl = document.getElementById('autorCitacao');
const btnNovaCitacao = document.getElementById('btnNovaCitacao');

const citacoes = [
    {
        texto: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
        autor: "Steve Jobs"
    },
    {
        texto: "A persistência é o caminho do êxito.",
        autor: "Charles Chaplin"
    },
   
];

function gerarNovaCitacao() {
    
    const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
    
    const citacaoSorteada = citacoes[indiceAleatorio];

    textoCitacaoEl.textContent = `"${citacaoSorteada.texto}"`;
    autorCitacaoEl.textContent = `— ${citacaoSorteada.autor}`;
}

btnNovaCitacao.addEventListener('click', gerarNovaCitacao);

gerarNovaCitacao();
