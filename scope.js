let a = 'first';

function scopeTest()
{
    console.log(a);
    a = 'changed';

    // let b = 'second';
    // console.log(b);

    if (a !='')
    {
        console.log(a);
    }
}

scopeTest();
console.log(a);
// console.log(b);