// const isPhoneStore = true;
// const isPhoneAvailable = true;

// function processMessage(resolveCallback, rejectCallback) {
//     if (!isPhoneStore) {
//       rejectCallback({
//         name: 'Wrong store',
//         message: 'Sorry, this is a food store!',
//       });
//     } else if (!isPhoneAvailable) {
//       rejectCallback({
//         name: 'Out of stock',
//         message: 'Sorry, the X phone is out of stock!',
//       });
//     } else {
//       resolveCallback({
//         name: 'OK',
//         message: 'The X phone is available! How many you want to buy?',
//       });
//     }
//   }
//   processMessage(
//     value => console.log(value),
//     reason => console.log(reason)
//   );

const stepOne = true;
const stepTwo = true;
const stepThree = true;


  function stepOne(value, callback) {
    setTimeout(() => {
      console.log(value);
      callback();
    }, 3000);
  }
  
  function stepTwo(value, callback) {
    setTimeout(() => {
      console.log(value);
      callback();
    }, 2000);
  }
  
  function stepThree(value, callback) {
    setTimeout(() => {
      console.log(value);
      callback();
    }, 1000);
  }
  
  // Run the functions sequentially with callbacks
  stepOne(1, () => {
    stepTwo(2, () => {
      stepThree(3, () => {
        console.log("All steps completed.");
      });
    });
  });