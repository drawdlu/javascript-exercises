const sumAll = function(sumFrom, sumTo) {
    if (sumFrom < 0 || sumTo < 0) {
        return 'ERROR';
    }
    
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
