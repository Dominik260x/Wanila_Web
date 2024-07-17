// constructor
//#39

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = () => console.log(`You drive ${this.make} ${this.model} in ${this.year}`);
}

const Car1 = new Car("Ford", "Mustang", 2019, "red");
const Car2 = new Car("Chevrolet", "Impala", 2019, "blue");
const Car3 = new Car("Dodge", "Charger", 2019, "yellow");

Car1.drive();
Car2.drive();
Car3.drive();