const setaEsquerda = document.getElementById('Setaesquerda');
const setaDireita = document.getElementById('Setadireita');
const imagens = document.querySelectorAll('.Imagem');
const numImagens = imagens.length;
let currentIndex = 0;

setaDireita.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % numImagens;
  updateCarousel();
});

setaEsquerda.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + numImagens) % numImagens;
  updateCarousel();
});

function updateCarousel() {
  imagens.forEach((imagem, index) => {
    if (index === currentIndex) {
      imagem.style.display = 'block';
    } else {
      imagem.style.display = 'none';
    }
  });
}
