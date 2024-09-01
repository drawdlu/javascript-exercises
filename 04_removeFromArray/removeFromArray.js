const removeFromArray = function(array, ...toRemove) {
    
    toRemove.forEach( (remove) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === remove) {
                array.splice(array.indexOf(remove), 1);
                i--;
            }
        }
    });
    

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
