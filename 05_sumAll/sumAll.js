const sumAll = function(sumFrom, sumTo) {
    let sum = 0;
    let start, end;
    if (sumTo > sumFrom) {
        start = sumFrom;
        end = sumTo;
    } else {
        start = sumTo;
        end = sumFrom;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
