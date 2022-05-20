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
if (counter >= sliderImages.length -1) return;
  sliders.style.transition ="transform 0.8s ease-in-out";
  counter++;
  sliders.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

preBtn.addEventListener('click', () => {
    if (counter <= 0) return; 
  sliders.style.transition ="transform 0.8s ease-in-out";
  counter--;
  sliders.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
sliders.addEventListener('transitionend', () => {
    if (sliderImages[counter].id ==='lastclone') {
        sliders.style.transition = "none";
        counter = sliderImages.length = -2;
        sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    }
    if (sliderImages[counter].id ==='firstclone') {
        sliders.style.transition = "none";
        counter = sliderImages - counter;
        sliderImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

});
