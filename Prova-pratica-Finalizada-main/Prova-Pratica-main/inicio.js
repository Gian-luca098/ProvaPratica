alert("Bem vindo ao Inicio do Mygames!");
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