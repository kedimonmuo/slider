const sliders = document.querySelector(".sliders");
const sliderImages = document.querySelectorAll(".sliders img");

const preBtn =document.querySelector("#preBtn");
const nextBtn =document.querySelector("#nextBtn");

// to get the first image
let counter =1 ; 
const size = sliderImages[0].clientWidth;

sliders.style.transform = "translateX('  + (-size * counter) + 'px)";


//buttons  
nextBtn.addEventListener('click',() => {
  sliders.style.transition ="transform 0.8s ease-in-out";
  counter++;
  sliders.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

preBtn.addEventListener('click', () => {
  sliders.style.transition ="transform 0.8s ease-in-out";
  counter--;
  sliders.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

