alert("Bem vindo à seção de jogos recomendados!");
const meuBotao = document.getElementById('meuBotao');
const textoSecreto = document.getElementById('textoSecreto');

if (meuBotao && textoSecreto) {
    meuBotao.addEventListener('click', function () {
        textoSecreto.classList.add('visivel');
    });
} else {

    console.warn('Elemento(s) não encontrado(s):', { meuBotao, textoSecreto });
}
//bottao 2
const meuBotao1 = document.getElementById('meuBotao1');
const textoSecreto1 = document.getElementById('textoSecreto1');

if (meuBotao1 && textoSecreto1) {
    meuBotao1.addEventListener('click', function () {
        textoSecreto1.classList.add('visivel');
    });
} else {

    console.warn('Elemento(s) não encontrado(s):', { meuBotao1, textoSecreto1 });
}
//bottao 3
const meuBotao2 = document.getElementById('meuBotao2');
const textoSecreto2 = document.getElementById('textoSecreto2');

if (meuBotao2 && textoSecreto2) {
    meuBotao2.addEventListener('click', function () {
        textoSecreto2.classList.add('visivel');
    });
} else {

    console.warn('Elemento(s) não encontrado(s):', { meuBotao2, textoSecreto2 });
}
const imagem = document.getElementById('card');

imagem.addEventListener('mouseenter', () => {
  imagem.style.transform = 'scale(1.5)';
});

imagem.addEventListener('mouseleave', () => {
  imagem.style.transform = 'scale(1)';
});

const imagem1 = document.getElementById('card1');

imagem1.addEventListener('mouseenter', () => {
  imagem1.style.transform = 'scale(1.5)';
});

imagem1.addEventListener('mouseleave', () => {
  imagem1.style.transform = 'scale(1)';
});

const imagem2 = document.getElementById('card2');

imagem2.addEventListener('mouseenter', () => {
  imagem2.style.transform = 'scale(1.5)';
});

imagem2.addEventListener('mouseleave', () => {
  imagem2.style.transform = 'scale(1)';
});