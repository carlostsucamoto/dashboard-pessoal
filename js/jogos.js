const meuBotao = document.getElementById("adicionar-jogo");
const nomeJogo = document.getElementById("nome-jogo");
const estiloJogo = document.getElementById("estilo-jogo");
const vontadeJogo = document.getElementById("vontade-jogo");
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
