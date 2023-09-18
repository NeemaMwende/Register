let names = ['david', 'eddie', 'alex', 'michael' ];
let others = ['sammy', 'gary', 'wolfgang', 'mark' ];

let lost = [4, 8, 15, 23, 45, 34];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

//to combine two arrays together
var combine = lost.concat(fibonacci);
console.log(combine);

var combine = names.concat(others);
console.log(combine);

/* names.pop()
names.push('Neema', 'Paul');
console.log(names); */

console.log(fibonacci.join(' ~ '));

// takes an item from the front side of an array... like a pop method 
// but from the front not the back...unshift-add items to the front
/* console.log(lost.shift());
console.log(lost);

lost.unshift(2,5,7,8);
console.log(lost); */

//reverse the order of things
/* console.log(names);
console.log(names.reverse()); 
console.log(names.sort()); */

//find out where the element is
console.log(others.indexOf('mark'));

console.log(combine);
console.log(combine.lastIndexOf(8));























