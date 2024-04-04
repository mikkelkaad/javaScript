const numberToGuess = 5;

let numberGuessed = prompt("Please pick a number");

while(numberToGuess != numberGuessed){

	numberGuessed = prompt('Wrong number, try again');

};

alert('Congratulations');