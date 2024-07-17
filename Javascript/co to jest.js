// this
//#38

const person1 = {
    name: "John Doe",
    favFood: "Pizza",
    sayHallo: function(){console.log(`Hello ${this.name}`)},
    eat: function(){console.log(`I like to eat ${this.favFood}`)},
}

const person2 = {
    name: "Jane Leach",
    favFood: "Chicken",
    sayHallo: function(){console.log(`Hello ${this.name}`)},
    eat: function(){console.log(`${this.name} like to eat ${this.favFood}`)},
}

person1.eat();
person2.eat();
