/* -----------------------------
   1. CARRINHO DE COMPRAS
------------------------------*/
let totalCarrinho = 0;

document.querySelectorAll(".add-carrinho").forEach(botao => {
    botao.addEventListener("click", () => {
        totalCarrinho++;

        // Criar notificação
        const alerta = document.createElement("div");
        alerta.classList.add("alerta-carrinho");
        alerta.innerText = "Produto adicionado ao carrinho!";

        document.body.appendChild(alerta);

        // Remover depois de 2s
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    });
});

/* -----------------------------
   2. FILTRO DE BUSCA EM TEMPO REAL
------------------------------*/
const barraBusca = document.querySelector(".search-bar input");
const produtos = document.querySelectorAll(".produto-card");

barraBusca.addEventListener("keyup", () => {
    const termo = barraBusca.value.toLowerCase();

    produtos.forEach(card => {
        const nome = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = nome.includes(termo) ? "block" : "none";
    });
});

/* -----------------------------
   3. ANIMAÇÃO AO ROLAR A PÁGINA
------------------------------*/
function animarScroll() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight - 100;

        if (posicao < alturaTela) {
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarScroll);
animarScroll();

/* -----------------------------
   4. VALIDAÇÃO DO FORMULÁRIO
------------------------------*/
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email.value)) {
        alert("E-mail inválido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});
