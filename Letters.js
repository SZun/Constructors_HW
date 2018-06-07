class Letter {
    constructor(character) {
        this.guessed = false;
        this.character = character;
    }

    letterPrompt() {
        if (this.guessed) {
            return `${this.character} `;
        } else {
            return "_ ";
        }
    }

    currentGuess(userInput) {
        if (userInput.toUpperCase() === this.character.toUpperCase()) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;