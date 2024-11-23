//BANNER 1 //
// Rotação automática entre as imagens
const images = document.querySelectorAll('.image-container');
let currentIndex = 0;

function changeImage() {
  images[currentIndex].style.opacity = '0.5'; // Transição suave
  currentIndex = (currentIndex + 1) % images.length; // Alterna para a próxima imagem
  images[currentIndex].style.opacity = '1';
}

// Alterna as imagens a cada 3 segundos
setInterval(changeImage, 3000);


// Inicializa a primeira imagem no centro
images[currentImageIndex].style.transform = 'translateX(0)';
images[currentImageIndex].style.opacity = '1';

// Inicia a animação
setTimeout(animateImages, 5000);



//CAROuSSEL 1 //
// Código JavaScript para o carrossel
document.querySelectorAll('.carousel-container').forEach((container) => {
    const carousel = container.querySelector('.carousel');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const updateCarousel = () => {
        const translateX = -currentIndex * 100; // Move 1 item por vez
        carousel.style.transform = `translateX(${translateX}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
});
