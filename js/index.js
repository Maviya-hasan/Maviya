const btn = document.querySelector(".icons");
let header = document.querySelector(".header");
let navLinks = document.querySelector(".navbar ul");
let acard = document.querySelector("#about .card");

btn.addEventListener("click", () => {
    header.classList.toggle("active");
})
navLinks.addEventListener("click", () => {
    header.classList.toggle("active");
})
acard.addEventListener("hover", () => {
    alert("hover")
})