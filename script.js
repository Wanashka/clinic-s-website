let currentIndex = 0;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const burgerIcon = document.querySelector('.burgerIcon');
const closeIcon = document.querySelector('.closeIcon');
const navigationHeader = document.querySelector('.navigationHeader');
const menu = document.querySelector('.menu');
const currentCard = document.querySelector('.currentCard');
const slides = document.querySelector('.sliderLine');
const totalSlides = document.querySelectorAll('.sliderCard').length;
const closeModalBtn = document.getElementById('closeModalBtn')
const modal = document.getElementById('myModal');

function openModalWindow() {
  modal.style.display = 'block'
}

function closeModalRecords() {
  modal.style.display = 'none'
}

function viewMenu() {
  burgerIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  navigationHeader.style.display = 'flex';
  menu.style.display = 'flex';
}

function closeMenu() {
  closeIcon.style.display = 'none';
  burgerIcon.style.display = 'block';
  navigationHeader.style.display = 'none';
  menu.style.display = 'none';
}

function removeBurgerIcon() {
  if (window.innerWidth > 768) {
    closeMenu();
    burgerIcon.style.display = 'none';
  } else if (window.innerWidth < 768) {
    burgerIcon.style.display = closeIcon.style.display === 'block' ? 'none' : 'block';
  }
}

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newPosition = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + newPosition + ')';
  currentCard.innerHTML = `${currentIndex + 1}`
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

setInterval(nextSlide, 5000);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
burgerIcon.addEventListener('click', viewMenu);
closeIcon.addEventListener('click', closeMenu);
window.addEventListener('resize', removeBurgerIcon);
closeModalBtn.addEventListener('click', closeModalRecords)



