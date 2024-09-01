const removeFromArray = function(array, toRemoveFromArray) {
    array.splice(array.indexOf(toRemoveFromArray), 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
