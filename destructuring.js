/* let a,b,c,d,e;

let names = ['car', 'boy', 'march', 'house', 'guest'];
[a,b,c,d,e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let others;
[a,b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);


 */

let year,model;
// wrap the entire thing 
({year,model} = 
{
    make: 'bmw',
    model: '745il',
    year: '2010',
    value: '5000'
});
console.log(year);
console.log(model);

let firstName = 'Neema';
let lastName = 'Mwende';
let city = 'Nairobi';
let phoneNumber = 0381981983;
let email = 'neemawende@gmail.com';

let details = firstName + ' ' + lastName + ' ' + city + ' ' + phoneNumber + ' ' + email;
let myInfo = `I am ${firstName}. I am ${email}. I am ${city}. I am ${age}.`
console.log(details);
console.log(myInfo);

/* let details = `${firstName} ${lastName} ${city} ${phoneNumber} ${email}`;
let myInfo = `I am ${firstName}. I am ${email}. I am ${city}. I am ${age}.`;
console.log(details);
console.log(myInfo); */
