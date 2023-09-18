let today = new Date();
let bob = new Date ('November 9, 2000 06:23:23');

//determine the elapsed time between the 2 dates given
var elapsedTime = today - bob;
console.log(elapsedTime);

//get parts
console.log(bob.getDate()); // Monday =1, sunday =7
// getDate
// getDay
// getSeconds
