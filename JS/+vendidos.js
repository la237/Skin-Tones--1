//BANNER 1 //
const images = document.querySelectorAll('.animated-image');
let currentImageIndex = 0;

// Função para animar as imagens
function animateImages() {
    // Define a imagem atual e a próxima
    const currentImage = images[currentImageIndex];
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[nextImageIndex];

    // Configura a imagem atual para sair para a esquerda
    currentImage.style.transform = 'translateX(-150%)';
    currentImage.style.opacity = '0';

    // Configura a próxima imagem para entrar pela direita após 1.5 segundos
    setTimeout(() => {
        nextImage.style.transform = 'translateX(0)';
        nextImage.style.opacity = '1';
    }, 1500);

    // Aguarda 5 segundos antes de iniciar a próxima transição
    setTimeout(() => {
        currentImageIndex = nextImageIndex;
        animateImages();
    }, 5000);
}

// Inicializa a primeira imagem no centro
images[currentImageIndex].style.transform = 'translateX(0)';
images[currentImageIndex].style.opacity = '1';

// Inicia a animação
setTimeout(animateImages, 5000);



//CAROuSSEL 1 //
const carousels = document.querySelectorAll('.carousel');
const states = {};

// Inicializa o estado para cada carrossel
carousels.forEach(carousel => {
    states[carousel.id] = 0;
});

function updateCarousel(carouselId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const totalSlides = carousel.children.length;
    const currentSlide = states[carouselId];
    
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', () => {
        const carouselId = button.getAttribute('data-carousel');
        states[carouselId] = states[carouselId] === 0 ? 0 : states[carouselId] - 1;
        updateCarousel(carouselId);
    });
});

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        const carouselId = button.getAttribute('data-carousel');
        const totalSlides = document.querySelector(`#${carouselId}`).children.length;
        
        states[carouselId] = (states[carouselId] + 1) % totalSlides;
        updateCarousel(carouselId);
    });
});
