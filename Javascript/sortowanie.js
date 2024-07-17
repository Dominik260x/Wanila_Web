// sort()
//#48

const people = [ {name: "John", age: 31, gpa: 3.0},
                {name: "Jane", age: 21, gpa: 4.0},
                {name: "Mary", age: 26, gpa: 3.5},
                {name: "Sara", age: 19, gpa: 3.5},]

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);










//let number = [1, 10, 9, 3, 2, 7, 5, 6, 4, 8];
//
//number.sort((a, b) => b - a);
//
//console.log(number);