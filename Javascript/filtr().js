// filter()
//#33

const words = ["apple", "banana", "cherry", "grape", "cheese",
    "mango", "orange", "kiwi", "melon", "pineapple"];
const shortWords = words.filter(getShortWord);
const longWords = words.filter(getLongWord);

console.log(shortWords);
console.log(longWords);

function getShortWord(element){
    return element.length <= 5;
}

function getLongWord(element){
    return element.length > 6;
}













//const ages = [15, 16, 17, 18, 18, 29, 60];
//const adult = ages.filter(isAdult);
//const children = ages.filter(isChildren);
//
//console.log(adult);
//console.log(children);
//
//function isAdult(element){
//    return element >= 18;
//} 
//
//function isChildren(element){
//    return element < 18;
//}


//let numbers = [1, 2, 3, 4, 5,  6, 7];
//let evenNumbers = numbers.filter(isEven);
//let oddNumbers = numbers.filter(isOdd);
//
//console.log(oddNumbers);
//
//function isEven(number){
//    return number % 2 === 0;
//}
//
//function isOdd(number){
//    return number % 2 !== 0;
//}