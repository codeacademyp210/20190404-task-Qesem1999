"use strict"


let next = document.querySelector(".arrowright");
let prev = document.querySelector(".arrowleft");

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide(){
    let activeImage = document.querySelector(".active-next-item");
    activeImage.classList.remove("active-next-item");
    if(activeImage.nextElementSibling != null){
        activeImage.nextElementSibling.classList.add("active-next-item");
    }else{
        activeImage.parentElement.firstElementChild.classList.add("active-next-item")
    }
}
function prevSlide(){
    let activeImage = document.querySelector(".active-next-item");
    activeImage.classList.remove("active-next-item");
    if(activeImage.previousElementSibling != null){
        activeImage.previousElementSibling.classList.add("active-next-item");
    }else{
        activeImage.parentElement.lastElementChild.classList.add("active-next-item")
    }
}