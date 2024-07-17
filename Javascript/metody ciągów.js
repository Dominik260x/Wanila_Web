//String methods
//#14         

//let user = "Dominik fall";

//console.log(user.charAt(1)); //szuka elementu 1 
//console.log(user.indexOf("m")); //szuka "m"
//console.log(user.lastIndexOf("i")); //szuka nastepnego "i"
//console.log(user.length); // sumuje liczbe liter/elementów(liczy też spacje)
//console.log(user.trim()); // usuwa spacje przed elementem w ""
//console.log(user.toUpperCase()); //Wypisuje wszystko z duzej litery
//console.log(user.toLowerCase()); //Wypisuje wszystko z małej litery
//console.log(user.repeat(2)); //powtarza user x razy jeden za drugim
//console.log(user.startsWith("D")); //zwraca czy user zaczyna sie od np.D
//console.log(user.endsWith("f")); //zwraca czy user kończy sie od console.log(user.charAt(1));
//console.log(user.includes("n")); //mówi czy "x" jest w user

let phoneNumber = "245-984-858";

//phoneNumber = phoneNumber.replaceAll("-", ""); //usuwa wszystkie - i ""z phoneNumber
//phoneNumber = phoneNumber.padStart(15, "0"); //15 mówi że ma być 15 elementów jeśli brakuje dodaj "0" na początku 
phoneNumber = phoneNumber.padEnd(15, "0"); //15 mówi że ma być 15 elementów jeśli brakuje dodaj "0" na końcu

console.log(phoneNumber);