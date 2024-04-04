//  5
//  HARD: Can you recreate the .map() method with a for loop?

const wallet = [10,15,27];
function interest(currency){
    return currency *= 1.25
};

const walletUsingMap = wallet.map(interest);

console.log('Using the .map method our wallet looks like: ' + walletUsingMap);

const walletUsingForLoop = ?

console.log('Using a for loop our wallet looks like: ' + walletUsingForLoop);
