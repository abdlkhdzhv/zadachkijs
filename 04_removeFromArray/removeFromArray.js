const removeFromArray = function(array, arrayMeaning) {
    let filteredArray = array.filter((number) => number != arrayMeaning);
    return filteredArray;
};

// не трогай код ниже
module.exports = removeFromArray;
