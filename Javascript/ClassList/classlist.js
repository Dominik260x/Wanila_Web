const buttons = document.querySelectorAll(".mybutton");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.classList.replace("enabled", "disabled");
  });
});
//const myh1 = document.querySelector("#myh1");
//const mybutton = document.querySelector("#mybutton");
//
//myh1.classList.add("enabled");
//mybutton.classList.add("enabled");
//
//myh1.addEventListener("click", (event) => {
//  if (event.target.classList.contains("disabled")) {
//    event.textContent = "disabled";
//  } else {
//    event.target.classList.replace("enabled", "disabled");
//  }
//});
//mybutton.addEventListener("click", (event) => {
//  if (event.target.classList.contains("disabled")) {
//    event.textContent = "disabled";
//  } else {
//    event.target.classList.replace("enabled", "disabled");
//  }
//});
