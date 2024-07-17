// string slicing
//#15  

//const fullName = "Dominik Komorowski";
//
//let firstName = fullName.slice(0, 7) //mówi że ma wyciągnąć fileName od 0 do 3 (Dom)
//let lastName = fullName.slice(-10) //.slice(początek, koniec)
//
//console.log(firstName)
//console.log(lastName)

let email = "dominik.komrowski@poczta.onet.pl";

let userName = email.slice(0, email.indexOf("@"));
let userLast = email.slice(email.indexOf("@"));

console.log(userName);
console.log(userLast)