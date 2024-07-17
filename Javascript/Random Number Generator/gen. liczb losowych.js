// Random Number Generator
// #9

const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;

mybutton.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max);
    randomnum2 = Math.floor(Math.random() * max);
    randomnum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
}

















































//const min = 50;
//const max = 100;
//let randomnum = Math.floor(Math.random() * (max - min)) + min;
//console.log(randomnum);