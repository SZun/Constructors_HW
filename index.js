var inquirer = require("inquirer");
var Word = require("./Word");

let guesses;
let currentWord;

const currentWordSelector = () => {
    const guessArr = [
        "cavaliers",
        "warriors",
        "bulls",
        "celtics",
        "rockets",
        "raptors"
    ];
    const randomWord = guessArr[Math.floor(Math.random() * guessArr.length)];
    return new Word(randomWord);
}

const letterGuess = () => {
    inquirer.prompt([{
        name: "guess",
        type: "input",
        message: "Guess a letter: "
    }]).then(val => {
        console.log(val);
        currentWord.currentGuess(val.guess);
        const wordString = currentWord.wordPrompt();
        console.log(wordString);
        guesses -= 1;
        console.log(`Guesses Left: ${guesses}`);
        if (wordString.includes("_") && guesses > 0) {
            letterGuess();
        } else {
            game();
        }
    });
}

const game = () => {
    currentWord = currentWordSelector();
    guesses = 10;
    console.log(currentWord.wordPrompt());
    console.log(`Guesses Left: ${guesses}`);
    letterGuess();
}

game();