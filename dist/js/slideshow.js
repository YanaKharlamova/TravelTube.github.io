let currentSlideIndex=0;
let slides=document.querySelectorAll(".slides");
let prev=document.querySelector(".slideshow__nav .btn-prev");
let next=document.querySelector(".slideshow__nav .btn-next");

let lastSlideIndex=slides.length-1;
let firstSlideIndex=0;

function goLeft(){
    slides[currentSlideIndex].classList.remove("slides--active");
    currentSlideIndex=currentSlideIndex===firstSlideIndex?lastSlideIndex:currentSlideIndex-1;
    slides[currentSlideIndex].classList.add("slides--active");
}

function goRight(){
slides[currentSlideIndex].classList.remove("slides--active");
currentSlideIndex=currentSlideIndex===lastSlideIndex?firstSlideIndex:currentSlideIndex+1;
slides[currentSlideIndex].classList.add("slides--active");
}
prev.addEventListener("click",goLeft);
next.addEventListener("click",goRight);
setInterval(goRight,8000);