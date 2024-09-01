const sumAll = function(sumFrom, sumTo) {
    let sum = 0;

    for (let i = sumFrom; i <= sumTo; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
