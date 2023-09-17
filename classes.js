//declaration
class Car
{
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print()
    {
        console.log('${this.make} ${this.model} ${this.year}');
        // console.log(`Make: ${this.make} Model:${this.model}, Year:${this.year}`);
    }
}
let myCar = new Car ('bmw', '42232', 2102);
myCar.print();


//expressionclear
// let car = class {};