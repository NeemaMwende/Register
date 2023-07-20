// setTimeout(function () 
//     {console.log('i waited 2 seconds');
// }, 2000);

let counter = 0;
function timeout ()
{
    setTimeout(function () 
    {
        console.log('hey ' + counter++);
        timeout();
    }, 2000);
}

timeout(); // function declaration
//ctrl + c

(function () 
{
    console.log('Immediatly invoked function expression (IIFE)');
}) ();