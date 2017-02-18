


var hipHopList = [
 "atribecalledquest",
 "mobbdeep",
 "outkast",
 "goodiemobb",
 "doggpound",
 "drdre"
]

var selectedWord = "";
var letterInSelectedWord = [];
var emptyWord = 0;
var inputResults = [];
var wrongGuesses = [];

var winScore = 0;
var lossScore = 1;
var guessesAllowed = 9;

function startGame(){

wrongGuesses = [];
guessesAllowed = 9;
inputResults = [];


selectedWord = hipHopList[Math.floor(Math.random() * hipHopList.length)];
letterInSelectedWord = selectedWord.split("");
emptyWord = letterInSelectedWord.length;

for(var i = 0; i < emptyWord; i++){
    inputResults.push("_");
}
console.log(inputResults);
document.getElementById('word-blank').innerHTML = inputResults.join(" ");
document.getElementById("guesses-left").innerHTML = guessesAllowed;

}

function reviewLetters(letter){

    var letterInWord = false;

    for(var i = 0; i < emptyWord; i++){
        if(selectedWord[i] === letter){
            letterInWord = true;
        }
    }

    if(letterInWord){
        for(i = 0; i < emptyWord; i++){
            if(selectedWord[i] === letter){
            inputResults[i] = letter;
        }
        }
    }else{
        guessesAllowed --;
        wrongGuesses.push(letter)
    }
}

function roundComplete(){

    document.getElementById('word-blank').innerHTML = inputResults.join(" ");
    document.getElementById('guesses-left').innerHTML = guessesAllowed;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    if(letterInSelectedWord.join(" ") === inputResults.join(" ")){
        winScore++;
        alert("You are hip hop, you won!!");
        document.getElementById('win-counter').innerHTML = winScore;
        startGame();
    }else if(guessesAllowed === 0){
        document.getElementById('loss-counter').innerHTML  = lossScore ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("You just lost!");        
        startGame();
    }
}
startGame();
document.onkeyup = function(event){
    
    var letterInputted = String.fromCharCode(event.keyCode).toLowerCase();
    reviewLetters(letterInputted)
    roundComplete();
}


