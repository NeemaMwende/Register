let a = 2000;
let b = 10000;
let c = 2500;
let d = 2000;
let e = 23000;
var f =  a + b + c + d + e;

function totalSum ()
{
    totalSum = ('Answer is equal to' + '' + f)
    console.log(totalSum);
}
totalSum();
console.log(); 

// Dont do this 
// var myVariable = 'I am at the global scope';

// var myFunction = function()
// {
//     console.log('me too!');
// }

function one()
{
    return 'one';
}
let value = one();
// console.log(value);
// console.log(one());
console.log(typeof value);
console.log(value());


//string
//number
//defined
//boolean
//function