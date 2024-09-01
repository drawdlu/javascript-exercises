const repeatString = function(word, repeatWordNTimes) {
    if (repeatWordNTimes < 0) {
        return 'ERROR';
    }

    let finalString = '';

    for (let i = 0; i < repeatWordNTimes; i++) {
        finalString += word;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
