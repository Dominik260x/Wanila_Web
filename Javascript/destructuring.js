// destructuring
//#45

//-----------Example 1-----------

//let a = 1;
//let b = 2;
//
//[a, b] = [b, a]
//
//console.log(a);
//console.log(b);
//-----------Example 2-----------

//const colors = ["red", "green", "blue", "yellow", "orange"];
//
//[colors[0], colors[4]] = [colors[4], colors[0]]
//
//console.log(colors);
//-----------Example 3-----------

//const color = ["red", "green", "blue", "yellow", "orange"];
//
//const [firstColor, secondColor, thirdColor, ...extraColor] = color;
//
//console.log(firstColor);
//console.log(secondColor);
//console.log(thirdColor);
//console.log(extraColor);

//-----------Example 4-----------



//const person1 = {
//    firstName: "John",
//    lastName: "Doe",
//    age: 30,
//    job: "Software Engineer",
//}
//
//const person2 = {
//    firstName: "Jane",
//    lastName: "Leach",
//    age: 25,
//}
//
//const {firstName, lastName, age, job} = person2;
//
//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);


//-----------Example 5-----------

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Software Engineer",
}

const person2 = {
    firstName: "Jane",
    lastName: "Leach",
    age: 25,
}

displayPerson(person2);
