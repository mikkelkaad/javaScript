//  4
//  Here is some repetition from Datatypes.
//  We want to implement the resting while loop from the previous lesson.
//  But this time let's make it a method of the hero object.

const hero = {
    name: "John",
    age: 20,
    wallet:[10,15,27],
    level: 1,
    hp: 1,
    maxHp: 5
};

//  Remember the 'this' keyword
hero.rest = ?

console.log('The hero is hurt. Their hp is ' + hero.hp);

hero.rest();

console.log('After resting the hero is back to ' + hero.hp + '/' + hero.maxHp + ' hp');