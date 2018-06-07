var Letter = require("./Letters");

class Word {
    constructor(randomWord) {
        this.currentWord = [];

        for (let i = 0; i < randomWord.length; i++) {
            this.currentWord.push(new Letter(randomWord[i]))
        }
    }

    wordPrompt() {
        let wordOutput = "";
        this.currentWord.forEach(letter => {
            wordOutput += letter.letterPrompt();
        })
        return wordOutput;
    }

    currentGuess(userInput) {
        this.currentWord.forEach(letter => {
            letter.currentGuess(userInput);
        })
    }
}

module.exports = Word;