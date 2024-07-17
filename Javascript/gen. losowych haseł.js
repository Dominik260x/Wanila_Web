// Random number generator
//#29

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase? lowerCase : "";
    allowedChars += includeUppercase? upperCase : "";
    allowedChars += includeNumbers? numbers : "";
    allowedChars += includeSymbols? symbols : "";

    if(length <= 0){
        return `(password length must be least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                 includeLowercase,
                                  includeUppercase,
                                   includeNumbers,
                                    includeSymbols);

console.log(`Generated password: ${password}`);