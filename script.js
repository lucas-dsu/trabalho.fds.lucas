const botao = document.getElementById("botaoMsg");
  const mensagem = document.getElementById("mensagem");

  let cliques = 0;

  botao.addEventListener("click", () => {
      cliques++;
      if (cliques === 1) {
        botao.innerText = "Clique de novo!!";
    } else if (cliques === 2) {
        mensagem.innerHTML = "Cada tentativa é um passo adiante, mesmo que pareça pequena.<br>O segredo não está em acertar de primeira, mas em continuar, na dúvida tente de novo.";
        botao.innerText = "↓ Leia isso: ↓";
        botao.style.backgroundColor = "green";
    }
    
  });

window.onscroll = function () {
    const botao = document.getElementById("btnTopo");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
};

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
