const navListToggleBtn = document.querySelector(".nav__list--toggle");
const navMenu = document.querySelector(".nav__menu");
navListToggleBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("visible");
})