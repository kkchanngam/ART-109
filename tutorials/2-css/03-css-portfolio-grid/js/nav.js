// console.log("hiiii");

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".nav-menu");

// () => is function()
hamburger.addEventListener("click", () => {
    menu.classList.toggle('active');
})