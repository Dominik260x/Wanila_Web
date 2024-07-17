// reduce()
//#34

const grades = [10, 20, 30, 40, 5]

const maxGrade = grades.reduce(max);
const minGrade = grades.reduce(min);

console.log(maxGrade);
console.log(minGrade);

function max(accumulator, element){
    return Math.max(accumulator, element);
}

function min(accumulator, element){
    return Math.min(accumulator, element);
}











//const prices = [100, 200, 300, 40, 5, 20, 30];
//
//const total = prices.reduce(sum);
//
//console.log(`Total: $${total.toFixed(2)}`);
//
//function sum(accumulator, element){
//    return accumulator + element;
//}