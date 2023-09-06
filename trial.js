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
// car.getPrice();
console.log(car.year)

// console.log(car[year]);
// console.log(car['year']);

// var anotherCar = {};
// anotherCar.whatever = 'bob';
// console.log(anotherCar.whatever);

var Originals =
{
    myFamily: { hybrid: 'klaus' }
};
console.log(Originals.myFamily.hybrid);

// creates an object graph
var k = 
{
    myProperty: 
    [
        {d: 'this'},
        {e: 'that'},
        {f: 'thiss'},
        {g: 'these'},
        {h: 'those'}
    ]
};
console.log(k.myProperty[3]);

//an object with an array 
let carlot = 
[
    {year: 2017, make: 'Toyota', model: '4Runner'},
    {year: 2015, make: 'BMW', model: '528i'},
    {year: 1982, make: 'Buick', model: 'Skylark'},
];
console.log(carlot[2]);

// example of a system to keep track of employees
let population = 
{
    originals: 
    [
        { firstName: 'Klaus', lastName: 'Mikaelson', phoneNumbers: ['0721436587', '0712345678']},
        { firstName: 'Elijah', lastName: 'Mikaelson', phoneNumbers: ['0711223344', '0744332211']},
        { firstName: 'Kol', lastName: 'Mikaelson', phoneNumbers: ['0719283746', '0791827364']},
    ],
    locals:
    [
        { firstName: 'Stefan', lastName: 'Salvatore', phoneNumbers: ['0721436587', '0712345678']},
        { firstName: 'Damon', lastName: 'Salvatore', phoneNumbers: ['0721436587', '0712345678']},
        { firstName: 'Elena', lastName: 'Gilbert', phoneNumbers: ['0721436587', '0712345678']},
        { firstName: 'Jeremy', lastName: 'Gilbert', phoneNumbers: ['0721436587', '0712345678']},
    ]
};
console.log(population.originals[2],population.locals[3]);








