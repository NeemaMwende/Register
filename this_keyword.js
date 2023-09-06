/* var car = 
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

// car.getPrice();
console.log(car.year) */
/* 
 function first()
 {
    return this;
 }
 console.log(first() === global);

 function second()
 {
    'use strict';
    return this;
 }
 console.log(second() === global);
//  console.log(second() === local);
 console.log(second() === undefined); */


 let myObject = { value: 'My Object' };

 //value is set on the global object
 global.value = 'Global object';

 function third() 
 {
    return this.value;
 }

 console.log(third());









