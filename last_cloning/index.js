const hamburger = document.querySelector(".hamburger");
const nav_link = document.querySelector(".nav_link");

hamburger.addEventListenerall("click", () => {
    hamburger.classList.toggle("active");
    nav_link.classList.toggle("active");
})




