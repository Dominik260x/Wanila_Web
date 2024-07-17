// nested object
//#46

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("John", 30, "123 Main Street", "San Francisco", "CA");
const person2 = new Person("Jane", 25, "12 Main Street", "San Francisco", "CA");
const person3 = new Person("Jan", 19, "213 ul.Kościelna", "Warsaw", "PL");

console.log(person1.address.country);























//const person = {
//    fullName: "John Doe",
//    age: 30,
//    isStudent: false,
//    hobbies: ["karate", "running", "swimming"],
//    address: {
//        street: "123 Main Street",
//        city: "San Francisco",
//        country: "CA"
//    }
//}
//
//for(const property in person.address){
//    console.log(person.address[property])
//}