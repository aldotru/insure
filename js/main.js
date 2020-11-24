const hamburguerMenu = document.querySelector(".hamburguer__icon");
const hamburguerNav = document.querySelector(".mobile__nav");

hamburguerMenu.addEventListener("click", function() {

    hamburguerNav.classList.toggle("open");

});