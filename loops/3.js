//  3
//  We imagine our hero is hurt and must rest to regain his hp

const hero = {
    name: "John",
    age: 20,
    wallet:[10,15,27],
    level: 1,
    hp: 5,
    maxHp: 5
};


//  Our hero is hurt and their hp is set to 1
hero.hp = 1;

//  The hero is resting. Complete the while loop so we get the fully rested log.
//  NOTE if the loop does not finish we can terminate the terminal with CTRL + C (Windows)
while(hero.hp < hero.maxHp){

};

console.log('The hero is fully rested');