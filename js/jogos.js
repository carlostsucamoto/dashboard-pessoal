const meuBotao = document.getElementById("adicionar-jogo");
const nomeJogo = document.getElementById("nome-jogo");
const estiloJogo = document.getElementById("estilo-jogo");
const vontadeJogo = document.getElementById("vontade-jogo");
const sortearJogo = document.getElementById("botao-sortear");
let listaJogos = JSON.parse(localStorage.getItem("meuBacklog")) || [];
meuBotao.addEventListener("click", function () {
let nomeDigitado = nomeJogo.value;
let estiloDigitado = estiloJogo.value;
let vontadeDigitado = vontadeJogo.value;
let jogoNovo = {
    nome: nomeDigitado,
    estilo: estiloDigitado,
    vontade: vontadeDigitado
};

listaJogos.push(jogoNovo);
let listaConvertida = JSON.stringify(listaJogos);
localStorage.setItem("meuBacklog", listaConvertida);
atualizarLista()
})
sortearJogo.addEventListener("click", function (event) {
    if( listaJogos.length === 0) {
        alert("Adicione um jogo antes de sortear");
        return;
    }
    let jogoAleatorio = Math.floor (Math.random() * listaJogos.length);
    let jogoEscolhido = listaJogos[jogoAleatorio];
    
sortearJogo.innerHTML = "Jogue: " + jogoEscolhido.nome;
})