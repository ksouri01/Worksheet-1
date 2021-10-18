const caesar = function (sentence, number) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";


    if (number < 0) {
        number = number * -1;
        if (number >= 26) {
            number = (number % 26);
            number = number * -1;
        } else {
            number = number * -1;
        }
    }

    return cypheredSentence = sentence.split("").map(letter => {
        let currentLetterPosition = alphabet.indexOf(letter);

        if (letter === letter.toUpperCase()) {
            currentLetterPosition = alphabet.indexOf(letter.toLowerCase());
        }
        let shiftedPosition = currentLetterPosition + number;
        if (shiftedPosition >= 26) {
            shiftedPosition = (shiftedPosition % 26);
        }

        if (!alphabet.includes(letter.toLowerCase())) {
            return letter;
        }
        if (letter === letter.toUpperCase()) {
            return alphabet.charAt(shiftedPosition).toUpperCase()
        } else if (letter === letter.toLowerCase()) {
            return alphabet.charAt(shiftedPosition).toLowerCase()
        }
    }).join('')
}

module.exports = caesar