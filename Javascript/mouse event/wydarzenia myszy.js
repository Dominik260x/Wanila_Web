//#63
const mybox = document.querySelector("#mybox");

mybox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
});
mybox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});
mybox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
});
