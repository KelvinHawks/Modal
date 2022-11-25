let btn = document.querySelector(".modal-btn")
let container = document.querySelector('.container-div')
let modal = document.querySelector(".Modal-overlay")
let closeBtn = document.querySelector(".close-btn")

btn.addEventListener("click", function(){
    modal.classList.add("overlay-disp")
    
})

closeBtn.addEventListener("click", function() {
    modal.classList.remove("overlay-disp")
    
})