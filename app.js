let row1 = document.querySelector('.gallery')
let row2 = document.querySelector(".galleryrow2")
let spinbutton = document.getElementById("spinButton")


function spinFish(e){
    console.log("hi",row1,row2)
    
    row1.style.transform = "rotateX(360deg)";
    row2.style.transform = "rotate(360deg)";
}

spinbutton.addEventListener("click", spinFish)