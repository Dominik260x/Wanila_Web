// forEach()  // forEach pozwala na iterację po
// elementach tablicy i wykonuje na nich określone
// operacje.
// element = 1, 2, 3, 4, 5  // element = number[odpowiada za każdy 1 element]
// index = 0, 1, 2, 3, 4, 5 // index = number[odpowiada za całość elementu]
// array = [1, 2, 3, 4, 5] // array = numbers[]
//#31

let fruit = ["apple", "banana", "cherry", "grape"];

fruit.forEach(capitalize);
fruit.forEach(display);


function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);  //.slice(1) - wydobywa wszystko od elementu 1
}

function display(element, index, array){
    console.log(element);
}























//let numbers = [1, 2, 3, 4, 5];
//
//numbers.forEach(cube);
//numbers.forEach(display);
//
//function double(element, index, array){
//    array[index] = element * 2;  // element = number[elementy w tablicy] * 2 mnoży razy 2
//}
//
//function triple(element, index, array){
//    array[index] = element * 3;  // element = number[elementy w tablicy] * 3 mnoży razy 3
//}
//
//function square(element, index, array){
//    array[index] = Math.pow(element, 2); // to samo co powers robi
//}
//
//function cube(element, index, array){
//    array[index] = Math.pow(element, 3); //podnosi do potegi 3 np. 5 x 5 = 125
//}
//
//function powers(element, index, array){
//    array[index] = element * element; // element = number[elementy w tablicy] * element czyli podnosi do potegi 2 np. 5 x 5 = 25
//}
//
//function display(element){
//    console.log(element);
//}