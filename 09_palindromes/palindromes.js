const palindromes = function (word) {
    const palin = getLowerCharsAndReverse(word);
    const stringLen = palin.word.length
  
    for (let i = 0; i < stringLen; i++) {
        if (palin.word[i] !== palin.reverse[i]) {
            return false;
        }
    }
    return true;
};

function getLowerCharsAndReverse(chars) {
    const wordChars = chars.toLowerCase().split('').filter( (item) => item.match(/[a-zA-Z0-9]/));
    const word = wordChars
    const reverse = wordChars.slice().reverse()
    return {word: word, reverse: reverse, wordChars: wordChars}
}

// Do not edit below this line
module.exports = palindromes;
