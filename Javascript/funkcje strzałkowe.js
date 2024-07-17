// arrow function
//#36

numbers = [1, 2, 3, 4, 5, 6];

squares = numbers.map((element) => Math.pow(element, 2));
cube = numbers.map((element) => Math.pow(element, 3));
evenNumbers = numbers.filter((element) => element % 2 === 0);
oddNumbers = numbers.filter((element) => element % 2!== 0);
total = numbers.reduce((accumulator, element) => accumulator + element, 0);

console.log(squares);
console.log(cube);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);