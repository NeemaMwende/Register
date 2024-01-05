// let p = new Promise((resolve, reject) => {
//     let isTrue = false;
//     if (isTrue) {
//       resolve('Promise resolved');
//     } else {
//       reject('Promise rejected');
//     }
//   });
//   p
// .then(message => console.log(`Promise resolved: ${message}`))
// .catch(message => console.log(`Promise rejected: ${message}`));
// Accessing a Promise variable. The variable is chained to the then() and catch() methods to handle resolved and rejected state

let n = new Promise((resolve, reject) => {
    let isTrue = true;
    if(isTrue) 
    {
        resolve('Promised Resolved');
    }
    else
    {
        reject('promise rejected');
    }
});
n
.then(message => console.log(`Promise resolved: ${message}`))
.catch(message => console.log(`Promise rejected: ${message}`));
