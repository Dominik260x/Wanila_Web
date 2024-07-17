const newbutton = document.createElement("button");
newbutton.textContent = "button 5";
newbutton.className = "mybutton";
document.body.appendChild(newbutton);
let buttons = document.querySelectorAll(".mybutton");
buttons.forEach((buttons) => {
  buttons.style.backgroundColor = "green";
  buttons.textContent += " x";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    event.target.textContent = "Kliknięto";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
  });
});
