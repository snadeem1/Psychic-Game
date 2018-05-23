var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
  };
var newGuessesSoFar = function() {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
        
};

var reset = function() {
    guessesSoFar = [];
        document.querySelector('#let').innerHTML = "Your Guesses so far: ";
        guessesLeft = 9; 
        guessesSoFar.length = 0;
}
updateGuessesLeft();
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
     guessesSoFar.push(userGuess); 
    

    
    if (userGuess == computerGuess) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert('You are a PSYCHIC!');
        reset();
    }
    else if (guessesLeft == 0){
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert('You are not a Psychic! Try again');
        reset();
        
    }
    else if (userGuess !== computerGuess){
        debugger
        guessesLeft--;
        newGuessesSoFar();
        
    }
    updateGuessesLeft();
   
    
}