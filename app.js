let row1 = document.querySelector('.gallery')
let row2 = document.querySelector(".galleryrow2")
let flipbutton = document.getElementById("flipButton")
let spinbutton = document.getElementById("spinButton")

function flipFish(e){
    console.log("hi",row1,row2)
    
    row1.style.transform = `rotateX(180deg)`;
    row2.style.transform = "rotateX(180deg)";
}

flipbutton.addEventListener("click", flipFish)

function spinFish(e){
    row1.style.transorm = "rotateZ(180deg)"
    row2.style.transform = "rotateZ(180deg)"
}

spinbutton.addEventListener("click", spinFish)


let form = document.createElement('form');


let inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Name';

let inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'userEmail';
inputEmail.placeholder = 'Email';


let buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(buttonSubmit);

document.body.appendChild(form);

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("Thanks for Submitting!")
})