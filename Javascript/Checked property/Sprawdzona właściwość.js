//Checked property
//#11

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent = 'Subskrybujesz';
    }
    else{ 
        subresult.textContent = 'Nie subskrybujesz, zasubskrubuj';
    }

    if(visabtn.checked){
        paymentresult.textContent = 'Płacisz Visa';
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = 'Płacisz Mastercard';
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = 'Płacisz Paypal';
    }
    else{
        paymentresult.textContent = 'Wybieez metode płatności';
    }
}



