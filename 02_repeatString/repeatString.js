const repeatString = function(word, repeatWordNTimes) {
    let finalString = '';

    for (let i = 0; i < repeatWordNTimes; i++) {
        finalString += word;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
