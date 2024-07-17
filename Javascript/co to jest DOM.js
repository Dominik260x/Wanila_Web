// DOM = Document Object Model
// #59
const username = " D26";

const welcome = document.querySelector("#p1");

welcome.textContent += username === "" ? "Who" : username;
