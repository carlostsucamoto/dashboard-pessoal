const vitrineJogos = document.getElementById("lista-de-jogos");
const meuBotao = document.getElementById("adicionar-jogo");
const nomeJogo = document.getElementById("nome-jogo");
const generoJogo = document.getElementById("genero-jogo");
const vontadeJogo = document.getElementById("vontade-jogo");
const imagemJogo = document.getElementById("imagem-jogo");
const sortearJogo = document.getElementById("botao-sortear");

let listaJogos = JSON.parse(localStorage.getItem("meuBacklog")) || [];

function salvarEAtualizar() {
    localStorage.setItem("meuBacklog", JSON.stringify(listaJogos));
    atualizarLista();
}

function deletarJogo(id) {
    if (confirm("Deseja remover este jogo?")) {
        listaJogos = listaJogos.filter(j => j.id !== id);
        salvarEAtualizar();
    }
}

function editarVontade(id, novaVontade) {
    let jogo = listaJogos.find(j => j.id === id);
    if (jogo) {
        jogo.vontade = novaVontade;
        localStorage.setItem("meuBacklog", JSON.stringify(listaJogos));
    }
}

meuBotao.addEventListener("click", function () {
    let nomeDigitado = nomeJogo.value;
    let generoDigitado = generoJogo.value;
    let vontadeDigitado = vontadeJogo.value;
    let imagemDigitada = imagemJogo.value;

    if (nomeDigitado.trim() === "" || generoDigitado.trim() === "" || vontadeDigitado.trim() === "") {
        alert("Erro: Preencha todos os campos!");
        return;
    }

    let jogoJaExiste = listaJogos.some(function(j) {
        return j.nome.toLowerCase() === nomeDigitado.toLowerCase();
    });

    if (jogoJaExiste) {
        alert("Erro: Este jogo já está na lista!");
        return; 
    }

    if (imagemDigitada.trim() === "") {
        imagemDigitada = "https://via.placeholder.com/150x200?text=Sem+Capa";
    }

    let jogoNovo = {
        id: Date.now(),
        nome: nomeDigitado,
        genero: generoDigitado,
        vontade: vontadeDigitado,
        imagem: imagemDigitada
    };

    listaJogos.push(jogoNovo);
    salvarEAtualizar();

    nomeJogo.value = "";
    generoJogo.value = "";
    vontadeJogo.value = ""; 
    imagemJogo.value = "";
    nomeJogo.focus();
});

sortearJogo.addEventListener("click", function () {
    if (listaJogos.length === 0) {
        alert("Adicione um jogo antes de sortear");
        return;
    }

    let sorteado = listaJogos[Math.floor(Math.random() * listaJogos.length)];
    sortearJogo.innerHTML = "Jogue: " + sorteado.nome;
});

function atualizarLista() {
    vitrineJogos.innerHTML = "";

    listaJogos.forEach(function(jogo) {
        let item = document.createElement("li");
        item.style.listStyle = "none";

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                <img src="${jogo.imagem}" style="width: 80px; height: 110px; object-fit: cover; border-radius: 5px;">
                <div style="flex-grow: 1;">
                    <strong style="font-size: 1.1em;">${jogo.nome}</strong><br>
                    <span>${jogo.genero}</span><br>

                    <small>Status: </small>
                    <select onchange="editarVontade(${jogo.id}, this.value)">
                        <option value="Alta" ${jogo.vontade === "Alta" ? "selected" : ""}>Alta</option>
                        <option value="Media" ${jogo.vontade === "Media" ? "selected" : ""}>Media</option>
                        <option value="Baixa" ${jogo.vontade === "Baixa" ? "selected" : ""}>Baixa</option>
                    </select>

                    <button onclick="deletarJogo(${jogo.id})" style="margin-left: 10px; color: red;">Apagar</button>
                </div>
            </div>
        `;

        vitrineJogos.appendChild(item);
    });
}

atualizarLista();