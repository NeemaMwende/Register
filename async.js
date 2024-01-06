// a simple fetch API example
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error));

  //Using Await in place of .then() method chaining
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();
console.log(json)
//Now if you run the code above, you might get an error like this:
//SyntaxError: await is only valid in async functions and the top level bodies of modules
//This error occurs because the await keyword must be used inside an asynchronous function or a module.

//The Async Keyword
//To create an asynchronous function, you need to add the async keyword before your function name.
async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json)
  }
  
  runProcess();

  //to handle any errors we use try catch in the async functions
  async function runProcess() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  
  runProcess();

  //How to Use Async/Await in IIFE and Arrow Functions
//An Immediately Invoked Function Expression (IIFE) is a technique used to execute a function immediately as soon as you define it.
//IIFE Asynchronous Function Example
(async function () {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  })();

  //Arrow Asynchronous Function Example
  const runProcess = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  runProcess();


  //The async/await syntax enables you to handle promises without using .then() and .catch() method chaining, 
  //which also removes the need for nested callbacks.

 //An if/else block inside a Promise then() method
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    if (json.userId == 1) {
      json.completed == false;
    } else {
      json.completed == true;
    }
  })
  .catch(error => console.log(error));
  //This code is hard to reason with and modify when compared to the async/await version as follows:
  (async function () {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      if (json.userId == 1) {
        json.completed == false;
      } else {
        json.completed == true;
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  })();

//By using the async/await syntax, you reduce the need for method chaining and nested callbacks. 
//This impact the readability of your code, especially when you have nested code like if/else and a for loop block.