const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const slideWidth = carouselItems[0].offsetWidth;
let currentIndex = 0;

function slideToNextItem() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

setInterval(slideToNextItem, 5000); 

const navItems = document.querySelectorAll('.navbar li');

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('mouseover', function() {
    this.style.color = 'red';
  });

  navItems[i].addEventListener('mouseout', function() {
    this.style.color = '#333';
  });
}