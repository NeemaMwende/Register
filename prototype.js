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

