//#65
const mybutton = document.querySelector("#mybutton");
const myimg = document.querySelector("#myimg");

mybutton.addEventListener("click", (event) => {
  if (myimg.style.visibility === "hidden") {
    myimg.style.visibility = "visible";
    mybutton.textContent = "Hide";
  } else {
    myimg.style.visibility = "hidden";
    mybutton.textContent = "Show";
  }
});
