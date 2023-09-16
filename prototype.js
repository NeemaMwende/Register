// objects linking to othr objects (oloo)= prototypocal chain link
// c+ java ,OOPs
// main difference of js with other oops is its focus between the reltionships
// the objects instead of thr relationships btn the classes

let originalCar = 
{
    make: "Ford",
    year: '2010',
    model: '745li'
};

// creating a new object from an existing object
let newCar = Object.create(originalCar);
console.log(newCar.make);
// to get a prototype of the new car
console.log(Object.getPrototypeOf(newCar)); 

// let myPrototype = Object.getPrototypeOf(newCar);
// console.log(myPrototype.year);

originalCar.doors = 4;
originalCar.color = 'red';
console.log(newCar.doors);
console.log(Object.getPrototypeOf(newCar));

// newCar.cc = 1800;
// newCar.color = 'blue';
// // console.log(Object.getPrototypeOf(originalCar));
// console.log(Object.getPrototypeOf(newCar));
console.log(newCar.cc);

// to display the attributes of the original car
for (let key in originalCar) {
    console.log(key + ": " + originalCar[key]);
}


newCar.cc = 1800;
newCar.color = 'blue';

// Creating a new object from an existing object
let newCar = Object.create(originalCar);
newCar.color = 'Blue';

for (let key in newCar) {
    console.log(key + ": " + newCar[key]);
}



