function toggleDetails(card) {
    card.classList.toggle("show-details");
  }

  // JavaScript para fazer o carrossel passar automaticamente banner 1 //
// JavaScript para fazer o carrossel passar automaticamente
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextImage() {
  // Remove a classe 'active' gradualmente
  items[currentIndex].classList.remove('active');
  
  // Atualiza o índice
  currentIndex = (currentIndex + 1) % items.length;

  // Adiciona a classe 'active' ao próximo slide
  items[currentIndex].classList.add('active');
}

// Passa para a próxima imagem a cada 3 segundos
setInterval(showNextImage, 3000);



  //carrosel 1 de produtos //
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".product-slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const indicators = document.querySelectorAll(".carousel-indicators .indicator");
  
    let currentSlide = 0;
  
    function updateCarousel() {
      // Oculta todos os slides
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "flex" : "none";
      });
  
      // Atualiza os indicadores ativos
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
      });
    }
  
    function goToSlide(slideIndex) {
      if (slideIndex >= 0 && slideIndex < slides.length) {
        currentSlide = slideIndex;
        updateCarousel();
      }
    }
  
    nextButton.addEventListener("click", () => {
      goToSlide((currentSlide + 1) % slides.length);
    });
  
    prevButton.addEventListener("click", () => {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => goToSlide(index));
    });
  
    // Mostra o slide inicial
    updateCarousel();
  });

  //avaliaçoes //
  