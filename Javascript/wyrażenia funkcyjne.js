// Function expressions
//#35 

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const  cube = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNumbers = numbers.filter(function(element){
    return element % 2!== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});


const hello = function(){
    console.log("Hello");
}
hello();
setTimeout(function(){
    console.log("World");
}, 2000)

//function declaration

//function hello(){
//    console.log("Hello");
//}

//function expression

//const hello = function(){
//    console.log("Hello");
//}
//
//hello();