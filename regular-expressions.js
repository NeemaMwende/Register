
// regex in short to find patterns in texts
let pattern = /xyz/;
// console.log(pattern);
// console.log(typeof pattern);

let value = '138329389291';
let teste = 'dhujsd sjndis skdnisz xyz';
console.log(pattern.test(value));
// searches the entire text for the pattern and outputs a boolen (true/false)
// if its found within the text
console.log(pattern.test(teste));

//replace the pattern given xyz, with the new pattern word just
console.log(teste.replace(pattern, 'just'));
// gives the pattern we are searching for and what position 
// it is found where in our case its 22
console.log(teste.match(pattern));

var match = teste.match(pattern);
console.log(match.index);