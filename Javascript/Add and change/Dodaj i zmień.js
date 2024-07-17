//#62
//1
const newh1 = document.createElement("h1");

//2
newh1.textContent = "Hello";
newh1.id = "myh1";
newh1.style.textAlign = "center";

//3
//document.body.append(newh1);
//document.body.prepend(newh1);
//document.querySelector("#box1").append(newh1);

const box = document.querySelectorAll(".box");
document.body.insertBefore(newh1, box[3]);

//remove
document.body.removeChild(newh1);
