// let hi = () =>
// {
//     console.log(`howdy`);
// };
// hi();

// let hey = (name) => {console.log(`howdy ${name}`)};
// hey('bob');

/* let hi = () => {
    console.log(`howdy`);
};
hi();  */

// let add = (a, b) => 
// {
//     return a + b;
// }
// console.log(add(7,3));

//the map function allows us to map howdy to all the names mentioned
//prints out howdy david, howdy addie, howdy alex, howdy michael
let names = ['david', 'eddie', 'alex', 'michael'];
names.map((name) => {console.log(`howdy ${names}!` ) } );

// let kids = ['anne', 'carol', 'mike'];
// kids.map( (kids) => {console.log(`Hey` ${kids})}  );

//prints out howdy david 1!,howdy eddie2!,howdy alex3!,howdy michael4!
let namess = ['david', 'eddie', 'alex', 'michael'];
let i = 0;
names.map((name) => {i++; console.log(`howdy ${namess} ${i}!` ) } );

//prints out the names in an array enclosement with the backslashes on each name
let namees = ['david', 'eddie', 'alex', 'michael'];
var transform = namees.map((name) => {return `howdy ${name}!` });
console.log(transform);









