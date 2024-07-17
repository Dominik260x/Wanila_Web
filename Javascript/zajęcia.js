// class
//#40

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product ${this.name}`)
        console.log(`Price: ${this.price.toFixed(2)}`)
    }

    calculateTotalPrice(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.21;

const product1 = new Product("Laptop", 6000);
const product2 = new Product("Mouse", 100);
const product3 = new Product("Keyboard", 150);

product1.displayProduct();

const totalPrice = product1.calculateTotalPrice(salesTax);
console.log(`Total price (with Tax): ${totalPrice.toFixed(2)}`);