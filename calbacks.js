const isPhoneStore = true;
const isPhoneAvailable = true;

function processMessage(resolveCallback, rejectCallback) {
    if (!isPhoneStore) {
      rejectCallback({
        name: 'Wrong store',
        message: 'Sorry, this is a food store!',
      });
    } else if (!isPhoneAvailable) {
      rejectCallback({
        name: 'Out of stock',
        message: 'Sorry, the X phone is out of stock!',
      });
    } else {
      resolveCallback({
        name: 'OK',
        message: 'The X phone is available! How many you want to buy?',
      });
    }
  }
  processMessage(
    value => console.log(value),
    reason => console.log(reason)
  );