const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const totalSlides = 9; // количество элементов
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 364; // ширина одного элемента
  slides.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1; // круговой переход
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0; // круговой переход
  updateSlider();
});
