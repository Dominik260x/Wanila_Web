// Arrays of objects
//#47 

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "banana", color: "yellow", calories: 73},
                {name: "orange", color: "orange", calories: 122},
                {name: "grape", color: "green", calories: 159},
                {name: "strawberry", color: "blue", calories: 45}];

// ----------- forEach()-----------

fruits.forEach(fruits => console.log(fruits.name));
console.log("-------------------------------");
// ----------- map()-----------

const fruitNames = fruits.map(fruits => fruits.name);
const fruitColors = fruits.map(fruits => fruits.color);
const fruitCalories = fruits.map(fruits => fruits.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

console.log("-------------------------------");

// ----------- filter() -----------

const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
const lowCaloriesFruits = fruits.filter(fruits => fruits.calories < 100);
const highCaloriesFruits = fruits.filter(fruits => fruits.calories > 100);

console.log(yellowFruits);
console.log(lowCaloriesFruits);
console.log(highCaloriesFruits);

console.log("-------------------------------");

// ----------- reduce() -----------

const maxFruit = fruits.reduce((max, fruits) => 
                                fruits.calories > max.calories ?
                                fruits : max);

const minFruit = fruits.reduce((min,fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min); 

console.log(maxFruit);
console.log(minFruit);

console.log("-------------------------------");

 
