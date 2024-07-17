//#64
const myBox = document.querySelector("#mybox");
const moveAmount = 25;
const moveAmountSpace = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.left = x + "px";
    myBox.style.top = y + "px";
  }
  console.log(event.key);
});

document.addEventListener("keydown", (event) => {
  myBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", (event) => {
  myBox.style.backgroundColor = "lightsteelblue";
});
