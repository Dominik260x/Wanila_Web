//rest parameters
// #27
function combine(...strings){
    return strings.join(" ");
}

const fullName = combine("Mr.", "Paweł", "II");

console.log(fullName); 





//function sum(...numbers){
//
//    let result = 0;
//    for(let number of numbers){
//        result += number;
//    }
//    return result;
//}
//function getAverage(...numbers){
//
//    let result = 0;
//    for(let number of numbers){
//        result += number;
//    }
//    return result / numbers.length;
//}
//
//
// const total = getAverage(75, 100, 23, 9);


//function openFridge(...foods){
//    console.log(...foods)
//}
//function getFood(...foods){
//    return foods;
//}
//
//
//const food1 = "pizza";
//const food2 = "jabłka";
//const food3 = "burger";
//const food4 = "kebab";
//const food5 = "sałata";
//
////openFridge(food1, food2, food3, food4, food5);
//
//const foods = getFood(food1, food2, food3, food4, food5)
// 
//console.log(foods);