//#73
fetch("people.json")
  .then((response) => response.json())
  .then((value) => value.forEach((value) => console.log(value)));

// const names = ["Clarence", "Abdie", "Johnathan", "John"];
// const person = {
//   name: "Esther",
//   age: "47",
//   isEmployed: true,
//   skills: ["HTML", "CSS", "JavaScript"],
//   hobbies: ["Fishing", "karate"],
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString);
