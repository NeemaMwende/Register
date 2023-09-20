// create an IEFE, wrap it
(function () 
{
    function clickHandler(message)
        {
            console.log('hey .... ' + message);
        }

        //Get a reference to myButton
        // let myButton = document.getElementById('myButton');
        let myButton = document.g
        myButton.addEventListener('click', function() {clickHandler('hi from iife')});
})();

// HTML: <p id="myParagraph">This is a paragraph.</p>

// JavaScript:
const paragraph = document.getElementById("myParagraph");
paragraph.innerHTML = "This paragraph has been updated!";

// HTML: <ul><li>Item 1</li><li>Item 2</li></ul>

// JavaScript:
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}


// HTML: <div class="container">This is a container</div>

// JavaScript:
const containers = document.getElementsByClassName("container");
containers[0].style.backgroundColor = "lightblue";


// Create a new element
const newElement = document.createElement("div");
newElement.textContent = "This is a new element";

// Append it to an existing element
const parentElement = document.getElementById("parent");
parentElement.appendChild(newElement);

// Remove an element
const elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);


// HTML: <button id="myButton">Click Me</button>

// JavaScript:
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});


















