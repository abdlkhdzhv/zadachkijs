const reverseString = function(str) {
    let reverse = '';

    for(let i = 0;i < str.length;i++){
        reverse = `${str[i]}${reverse}`
    }
    return reverse;
};

// не трогаем код ниже
module.exports = reverseString;
