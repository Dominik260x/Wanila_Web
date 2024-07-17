//Constants const
//#6

const pi = 3.14159;
let radius;
let circum;


document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circum = 2 * pi * radius;
    document.getElementById("myh3").textContent = circum + "cm";
}















