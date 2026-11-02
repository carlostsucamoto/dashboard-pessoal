const gridDias = document.getElementById("grid-dias");
const mesAnoTexto = document.getElementById("mes-atual");
const btnPrev = document.getElementById("btn-mes-anterior");
const btnNext = document.getElementById("btn-mes-proximo");
const diasDaSemana = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"];

let notasCalendario = JSON.parse(localStorage.getItem("notas do calendário")) || {};
let dataNavegacao = new Date();
let tarefasSemana = JSON.parse(localStorage.getItem("tarefas da semana")) || {};

function renderizarCalendario() {
    gridDias.innerHTML = "";
    let ano = dataNavegacao.getFullYear();
    let mes = dataNavegacao.getMonth();
    const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
   
    mesAnoTexto.innerText = `${nomesMeses[mes]} de ${ano}`;

    const primeiroDiaIndex = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();

    for (let i = 0; i < primeiroDiaIndex; i++) {
        let vazio = document.createElement("div");
        vazio.classList.add("dia-vazio");
        gridDias.appendChild(vazio);
    }

    for (let i = 1; i <= ultimoDia; i++) {
        let diaCard = document.createElement("div");
        diaCard.classList.add("dia-quadradinho");

        let chaveDoDia = `${i}-${mes}-${ano}`;
        let textoSalvo = notasCalendario[chaveDoDia] || ""; 
        diaCard.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px; text-align: left;">${i}</div>
            <input type="text" placeholder="Anotar..." class="input-calendario" value="${textoSalvo}" onchange="salvarNotaCalendario(${i}, ${mes}, ${ano}, this.value)">
        `;
        
        gridDias.appendChild(diaCard);
    }
} 

renderizarCalendario();

btnNext.addEventListener("click", function() {
    dataNavegacao.setMonth(dataNavegacao.getMonth() + 1);
    renderizarCalendario();
});

btnPrev.addEventListener("click", function() {
    dataNavegacao.setMonth(dataNavegacao.getMonth() - 1);
    renderizarCalendario();
});

function salvarNotaCalendario(dia, mes, ano, texto) {
    let chave = `${dia}-${mes}-${ano}`;
    notasCalendario[chave] = texto;
    localStorage.setItem("notas do calendário", JSON.stringify(notasCalendario));
}

function renderizarSemana() {
    diasDaSemana.forEach(function(dia) {
        let lista = document.getElementById(`lista-${dia}`);
        lista.innerHTML = ""; 

        if (tarefasSemana[dia]) {
            tarefasSemana[dia].forEach(function(tarefa, index) {
                let li = document.createElement("li");
                
                let corPrioridade = "🟢"; 
                if(tarefa.prioridade === "alto") corPrioridade = "🔴";
                if(tarefa.prioridade === "medio") corPrioridade = "🟡";

                li.innerHTML = `${corPrioridade} ${tarefa.texto}`;
                
                let btnDelete = document.createElement("span");
                btnDelete.innerText = "❌";
                btnDelete.style.cursor = "pointer";
                btnDelete.style.float = "right"; 

                btnDelete.onclick = function() {
                    tarefasSemana[dia].splice(index, 1); 
                    localStorage.setItem("tarefas da semana", JSON.stringify(tarefasSemana)); 
                    renderizarSemana(); 
                };

                li.appendChild(btnDelete);
                lista.appendChild(li);
            });
        }
    });
}

diasDaSemana.forEach(function(dia) {
    let btn = document.getElementById(`btn-${dia}`);
    let input = document.getElementById(`input-${dia}`);
    let select = document.getElementById(`filtro-${dia}`);
    
    if (!tarefasSemana[dia]) {
        tarefasSemana[dia] = [];
    }
    
    btn.addEventListener("click", function() {
        let textoDigitado = input.value;
        let prioridadeEscolhida = select.value;

        if (textoDigitado === "") {
            alert("Por favor, digite uma tarefa!");
            return;
        }
        
        let novaTarefa = {
            texto: textoDigitado,
            prioridade: prioridadeEscolhida
        };
        
        tarefasSemana[dia].push(novaTarefa);
        localStorage.setItem("tarefas da semana", JSON.stringify(tarefasSemana));
        
        alert(`A tarefa "${textoDigitado}" foi trancada no cofre da ${dia}!`); 
        input.value = ""; 
        renderizarSemana();
    });
});

renderizarSemana();