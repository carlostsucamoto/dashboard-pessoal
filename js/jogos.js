const vitrineJogos = document.getElementById("lista-de-jogos");
const meuBotao = document.getElementById("adicionar-jogo");
const nomeJogo = document.getElementById("nome-jogo");
const generoJogo = document.getElementById("genero-jogo");
const vontadeJogo = document.getElementById("vontade-jogo");
const horasJogo = document.getElementById("horas-jogo");
const sortearJogo = document.getElementById("botao-sortear");

let listaJogos = JSON.parse(localStorage.getItem("meuBacklog")) || [];

meuBotao.addEventListener("click", function () {
    let nomeDigitado = nomeJogo.value;
    let generoDigitado = generoJogo.value;
    let vontadeDigitado = vontadeJogo.value;
    let horasDigitadas = horasJogo.value;

    if (nomeDigitado.trim() === "") {
        alert("Erro: O nome do jogo não pode ficar em branco!");
        return;
    }

    let jogoJaExiste = listaJogos.some(function(jogoDaEstante) {
        return jogoDaEstante.nome.toLowerCase() === nomeDigitado.toLowerCase();
    });

    if (jogoJaExiste) {
        alert("Erro: Este jogo já está no seu Backlog!");
        return; 
    }

    if (generoDigitado.trim() === "") {
        alert("Erro: O gênero do jogo não pode ficar em branco!");
        return;
    }

    if (vontadeDigitado.trim() === "") {
        alert("Erro: A vontade do jogo não pode ficar em branco!");
        return;
    }

    if (horasDigitadas.trim() === "") {
        alert("Erro: As horas não podem ficar em branco!");
        return;
    }

    let jogoNovo = {
        id: Date.now(),
        nome: nomeDigitado,
        genero: generoDigitado,
        vontade: vontadeDigitado,
        horas: Number(horasDigitadas)
    };

    listaJogos.push(jogoNovo);
    localStorage.setItem("meuBacklog", JSON.stringify(listaJogos));
    
    atualizarLista();

    nomeJogo.value = "";
    generoJogo.value = "";
    vontadeJogo.value = ""; 
    horasJogo.value = "";
    nomeJogo.focus();
})

sortearJogo.addEventListener("click", function () {
    if (listaJogos.length === 0) {
        alert("Adicione um jogo antes de sortear");
        return;
    }
    let jogoAleatorio = Math.floor(Math.random() * listaJogos.length);
    let jogoEscolhido = listaJogos[jogoAleatorio];
    
    sortearJogo.innerHTML = "Jogue: " + jogoEscolhido.nome;
})

function atualizarLista() {
    vitrineJogos.innerHTML = "";
    listaJogos.forEach(function(jogo) {
        let itemDaLista = document.createElement("li");
        itemDaLista.innerHTML = `<strong>${jogo.nome}</strong> - ${jogo.genero} (Vontade: ${jogo.vontade}) - ⏳ ${jogo.horas}h`;
        vitrineJogos.appendChild(itemDaLista);
    });
}

atualizarLista();