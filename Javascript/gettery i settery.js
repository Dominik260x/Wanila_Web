// getters and setters
//#44

class Person {
  constructor(lastName, firstName, age) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name cannot be empty");
    }
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name cannot be empty");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age cannot be negative");
    }
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("John", "Doe", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

//class Rectangle{
//
//    constructor(width, height){
//        this.width = width;
//        this.height = height;
//    }
//
//    set width(newWidth){
//        if(newWidth > 0){
//            this._width = newWidth;
//        }
//        else{
//            console.error("Width cannot be negative");
//        }
//    }
//
//    set height(newHeight){
//        if(newHeight > 0){
//            this._height = newHeight;
//        }
//        else{
//            console.error("Height cannot be negative");
//        }
//    }
//
//    get width(){
//        return `${this._width.toFixed(1)}cm`;
//    }
//
//    get height(){
//        return `${this._height.toFixed(1)}cm`;
//    }
//
//    get area(){
//        return `${(this._width * this._height).toFixed(1)}cm^2`;
//    }
//}
//
//const rectangle = new Rectangle(10, 20);
//
//console.log(rectangle.width);
//console.log(rectangle.height);
//console.log(rectangle.area);
