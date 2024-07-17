const mobileNav = document.querySelector("ul");
const burgerIcon = document.querySelector("#burger");

burgerIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});
