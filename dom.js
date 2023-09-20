// create an IEFE, wrap it
(function () 
{
    function clickHandler(message)
        {
            console.log('hey .... ' + message);
        }

        //Get a reference to myButton
        let myButton = document.getElementById('myButton');
        myButton.addEventListener('click', function() {clickHandler('hi from iife')});
})();