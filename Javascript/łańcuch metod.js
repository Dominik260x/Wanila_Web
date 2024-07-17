//Method Chaining
//#16

let userName = window.prompt("Wprowadz imię użytkownika: ")

//No Method Chaining

//userName = userName.trim();
//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

//let extraChars = userName.slice(1);
//extraChars = extraChars.toLowerCase();
//userName = letter + extraChars;

//console.log(userName)

//Method Chaining 
userName = userName.trim().charAT(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName)