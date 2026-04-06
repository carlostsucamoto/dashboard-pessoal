const botao = document.getElementById("botao-adicionar");
const input = document.getElementById("input-ideia");
const listaEl = document.getElementById("lista-ideias");

function salvarIdeias() {
    const ideias = [];
    const todosOsSpans = listaEl.querySelectorAll("span");
    
    todosOsSpans.forEach(span => {
        ideias.push(span.innerText);
    });

    localStorage.setItem("lista-persistente", JSON.stringify(ideias));
}

function carregarIdeias() {
    const memoria = localStorage.getItem("lista-persistente");
    if (memoria) {
        const ideiasSalvas = JSON.parse(memoria);
        ideiasSalvas.forEach(texto => {
            criarElementoIdeia(texto);
        });
    }
}

function criarElementoIdeia(texto) {
    const novoItem = document.createElement("li");
    const textoItem = document.createElement("span");
    const botaoExcluir = document.createElement("button");

    textoItem.innerText = texto;
    botaoExcluir.innerText = "Excluir";

    botaoExcluir.onclick = function() {
        this.parentElement.remove();
        salvarIdeias();
    };

    novoItem.appendChild(textoItem);
    novoItem.appendChild(botaoExcluir);
    listaEl.appendChild(novoItem);
}

botao.addEventListener("click", function() {
    const valorInput = input.value.trim();

    if (valorInput === "") {
        alert("Erro: você não digitou nada!");
        return;
    }

    criarElementoIdeia(valorInput);
    salvarIdeias();

    input.value = "";
    input.focus();
});

carregarIdeias();