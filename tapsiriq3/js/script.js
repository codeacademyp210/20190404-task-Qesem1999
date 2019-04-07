"use strict";

let manu = document.forms["userForm"]["Manufacturer"];
    let model = document.forms["userForm"]["Model"];
    let year = document.forms["userForm"]["year"];
let ullist = document.querySelector("#car-list")
let onlyLatter = /^[a-zA-Z]*$/;
let onlyNumber = /([0-9]{4})/;
let carArray = [];





function Cars(nomresi, istehsalci, marka, buraxlisili){
    this.id = nomresi;
    this.manu = istehsalci;
    this.model = marka;
    this.year = buraxlisili;
}


let idCounter = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

function validateForm() {
    

    if(manu.value == "" || model.value == "" || year.value == ""){
        alert("Any of inputs is empty");
        return false;
    }
    if(!manu.value.match(onlyLatter)){
        alert("Manufacturer input is false");
        return false;
        
    }
    if(!year.value.match(onlyNumber)){
        alert("Release year is false");
        return false;
    }
    if(new Date() < new Date(year.value)){
        alert("Release year is wrong");
        return false;
    }



    let newCar = new Cars(idCounter(), manu.value, model.value, year.value);

    carArray.push(newCar);
   
    displayList();
   resetInputs();

   return false;
   
   
}
function deleteId(event){
    let elementIndex = event.parentElement;
    let id = +elementIndex.getAttribute("data-id");
    carArray.splice(id,1);
    displayList()
}




function displayList(){
    let list = "";
    for(let i = 0; i < carArray.length; i++){
       list += "<li class='list-group-item d-flex justify-content-between' data-id='"+i+"' onclick='fillForm()'><p class='m-0'>" + carArray[i].id + ". " + carArray[i].manu + " " + carArray[i].model + " - "
       + carArray[i].year + '</p><a href="#" onclick="deleteId(this)"><i class="far fa-trash-alt text-danger"></i></a></li>';
    }
    
    
    ullist.innerHTML = list;
}
function resetInputs() {
    manu.value = "";
    model.value = "";
    year.value = "";
    
}




