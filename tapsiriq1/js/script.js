"use strict"





function imgHover(e){
   e.previousElementSibling.style.transform = "scale(1.1, 1.1)";
   
}
function imgHoveroff(e){

    e.previousElementSibling.style.transform = "scale(1, 1)";
}