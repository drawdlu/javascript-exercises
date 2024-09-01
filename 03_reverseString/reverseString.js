const reverseString = function(text) {
    let reverseText = '';
    let textArray = text.split('');
    let textLength = textArray.length;

    for (let i = textLength - 1; i >= 0; i--) {
        reverseText += textArray[i];
    }

    return reverseText;
};

// create new string to hold reversed string

// split text into an array 
    // loop through array backwards
    // concatenate each character into a new string

// Do not edit below this line
module.exports = reverseString;
