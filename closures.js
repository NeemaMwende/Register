function sayHello(name)
{
    return function() {
        console.log('howdy' + name );
    }
}

let bob = sayHello('bob');
let conrad = sayHello('conrad');
let barbie = sayHello('bob');
let grant = sayHello('bob');


conrad();
barbie();
grant();
bob();
