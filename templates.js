let name = 'bob';
console.log(`hi ${name}`);


let sentence = `Today has really been good.
    i think im gaining more javascript skills
    and im liking where its headed. im still
    bumped about which library to use first 
    or framework for that matter.`;
console.log(sentence);

function getReasonCount()
{
    return 7;
}

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons' }to try this`;
console.log(interpolation);