// super = keyword
//#43 

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    } 

    move(speed){
        console.log(`${this.name} is moving ${speed} km/h`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} is running`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    
    swim(){
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }
}


class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    
    fly(){
        console.log(`This ${this.name} is flying`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit", 2, 10);
const fish = new Fish("Fish", 1, 5);
const hawk = new Hawk("Hawk", 3, 15);

rabbit.run();
console.log(" ")
fish.swim();
console.log(" ");
hawk.fly();