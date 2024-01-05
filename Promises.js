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
// the resolve and reject are the callbacks 

// let n = new Promise((resolve, reject) => {
//     let isTrue = true;
//     if(isTrue) 
//     {
//         resolve('Promised Resolved');
//     }
//     else
//     {
//         reject('promise rejected');
//     }
// });
// n
// .then(message => console.log(`Promise resolved: ${message}`))
// .catch(message => console.log(`Promise rejected: ${message}`));
// The resolve() function corresponds to the then() function, while reject() corresponds to the catch() function. You can change the isTrue value to false to test this.

const isPhoneStore = false;
const isPhoneAvailable = false;

function processMessage() {
  return new Promise((resolve, reject) => {
    if (!isPhoneStore) {
      reject({
        name: 'Wrong store',
        message: 'Sorry, this is a food store!',
      });
    } else if (!isPhoneAvailable) {
      reject({
        name: 'Out of stock',
        message: 'Sorry, the X phone is out of stock!',
      });
    } else {
      resolve({
        name: 'OK',
        message: 'The X phone is available! How many you want to buy?',
      });
    }
  });
}

processMessage()
  .then(response => console.log(response))
  .catch(error => console.log(error));

  