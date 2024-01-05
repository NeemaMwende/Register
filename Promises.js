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


// /setTimeout
//   function stepOne(value){
//     setTimeout(() => {
//       console.log(value);
//     }, 3000);
//   }
  
//   function stepTwo(value){
//     setTimeout(() => {
//       console.log(value);
//     }, 2000);
//   }
  
//   function stepThree(value){
//     setTimeout(() => {
//       console.log(value);
//     }, 1000);
//   }

  function stepOne(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 3000);
    });
  }
  
  function stepTwo(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 2000);
    });
  }
  
  function stepThree(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000);
    });
  }
  
  // Run the functions sequentially with Promises
  stepOne(1)
    .then(() => stepTwo(2))
    .then(() => stepThree(3))
    .then(() => {
      console.log("All steps completed.");
    });
  
// different code which doesnt need promises
// in areas where you dont have to wait setTimeout use callbacks
const myArray = [1, 2, 3, 4];
myArray.forEach(value => console.log(value + 5));
// the code above adds 5 to each value and outputs in the console


//promises are also used in the fetch api for network requests
fetch('<Your API URL>')
  .then(response => console.log(response))
  .catch(error => console.log(error));

  //calling the fetch API
  const response = fetch('<Your API URL>');
console.log(response); // Promise {<pending>}
//The fulfilled Promise from the Fetch API call
// Promise {<fulfilled>: Response}


//incase of multiple promises  = nested callbacks
const p1 = Promise.resolve('Success');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

p1.then(message1 => {
    return p2.then(message2 => {
      return p3.then(message3 => {
        return [message1, message2, message3];
      });
    });
  }).then(messages => {
    console.log(messages);
  });

  //= promise.all() method = better than nested callbacks
  const p4 = Promise.reject('Error From Promise One');
const p5 = Promise.resolve(200);
const p6 = Promise.resolve('Finished');

Promise.all([p4, p5, p6])
  .then(messages => console.log(messages))
  .catch(error => console.log(error));