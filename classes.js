// Class name should start with an uppercase letter (Car instead of car)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print() {
        // Use backticks (``) for template literals
        console.log(`${this.make} ${this.model} (${this.year})`);
        // You can also use the commented line below
        // console.log(`Make: ${this.make} Model: ${this.model}, Year: ${this.year}`);
    }
}

// Correct the case of 'Car' when creating an instance 
let myCar = new Car('BMW', '42232', 2022);
myCar.print();

class SportsCar extends Car
{
    revEngine()
    {
        console.log('reeving the engine for ' + this.model);
    }
}
let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();
// class newGift extends Car
// {

// }
// let newGiftCar = new newGift('audi', 'baby', 8923);
// newGiftCar.print();












