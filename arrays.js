let a = [4, 8, 16, 23, 42];
let b = ['david', 'addie', 'alex', 'michael',];

console.log(a[0]);
console.log(a[1]);
console.log(a);
console.log(b);

a[0] = 7;
console.log(a);
console.log(typeof a);

let c = [4, 'alex', true];
console.log(c);

console.log(b[4]);

console.log(a.length); // gives the actual number not zero based.

a[10] = 77; 
console.log(a);
console.log(a.length);

a.push(77);
console.log(a);
console.log(a.length);

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);

let d = [12, 13, 14, 15, 16];
console.log(d);
console.log(d.length);
d.push(17);
console.log(d);
d.pop();
d.pop();
d.pop();
d.pop();
console.log(d);
