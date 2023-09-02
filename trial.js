// const A = 12;
// const B = 13;
// var sum= A + B;

// function sum()
// {
//     sum = A + B;
//     console.log(sum);
// }
// sum();
// console.log(sum)



//object literals
let car = 
{
    make: 'bmw',
    model: '527824',
    year: '2012',
    getPrice: function()
    {
        //perform some calc
        return 5000;
        
    },
    printDescription: function()
    {
        console.log(this.make + '' + this.model + '');
    }
}

car.printDescription();
car.getPrice();
console.log(car.year)
