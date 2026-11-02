const listaEl = document.getElementById("lista-de-jogos");
const botaoAdd = document.getElementById("adicionar-jogo");
const nome = document.getElementById("nome-jogo");
const genero = document.getElementById("genero-jogo");
const vontade = document.getElementById("vontade-jogo");
const imagem = document.getElementById("imagem-jogo");

const busca = document.getElementById("busca-jogo");
const filtro = document.getElementById("filtro-status");

const sortearBtn = document.getElementById("botao-sortear");
const resultado = document.getElementById("resultado-sorteio");
const contador = document.getElementById("contador");

let lista = JSON.parse(localStorage.getItem("backlog")) || [];

function salvar() {
    localStorage.setItem("backlog", JSON.stringify(lista));
    atualizar();
}

botaoAdd.onclick = () => {
    if (!nome.value || !genero.value || !vontade.value) {
        alert("Preencha tudo!");
        return;
    }

    lista.push({
        id: Date.now(),
        nome: nome.value,
        genero: genero.value,
        vontade: vontade.value.toLowerCase(), /* PADRONIZAÇÃO AQUI */
        imagem: imagem.value || "https://via.placeholder.com/150"
    });

    nome.value = "";
    genero.value = "";
    vontade.value = "";
    imagem.value = "";

    salvar();
};

function atualizar() {
    listaEl.innerHTML = "";

    let filtrados = lista.filter(j =>
        j.nome.toLowerCase().includes(busca.value.toLowerCase())
    );

    if (filtro.value !== "todos") {
        filtrados = filtrados.filter(j => j.vontade === filtro.value.toLowerCase()); /* GARANTIA AQUI TAMBÉM */
    }

    contador.innerText = `Total: ${filtrados.length} jogos`;

    filtrados.forEach(jogo => {
        let li = document.createElement("li");

        li.innerHTML = `
            <div>
                <img src="${jogo.imagem}">
                <div>
                    <strong>${jogo.nome}</strong><br>
                    ${jogo.genero}<br>
                    ${jogo.vontade}
                    <br>
                    <button onclick="deletar(${jogo.id})">Apagar</button>
                </div>
            </div>
        `;

        listaEl.appendChild(li);
    });
}

function deletar(id) {
    lista = lista.filter(j => j.id !== id);
    salvar();
}

/* BUSCA */
busca.addEventListener("input", atualizar);

/* FILTRO */
filtro.addEventListener("change", atualizar);

/* SORTEIO */
sortearBtn.onclick = () => {
    if (lista.length === 0) return;

    let jogo = lista[Math.floor(Math.random() * lista.length)];

    resultado.style.display = "block";
    resultado.innerHTML = `
        <h2> Sorteado:</h2>
        <p>${jogo.nome}</p>
    `;
};

atualizar();