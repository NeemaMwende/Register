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