const track = document.querySelector('.slider__track');
const slides = Array.from(document.querySelectorAll('.slider__slide'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

// Initialize the track position to ensure it starts with the first slide
updateSlidePosition();