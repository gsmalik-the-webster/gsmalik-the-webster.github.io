const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav__link");

console.log(navLink);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
});

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
  });
});
