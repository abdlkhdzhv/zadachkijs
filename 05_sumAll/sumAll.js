const sumAll = function(num, resNum) {
    let sum = 0;

    for(let i = num; i <= resNum;i++){
        sum += i;
    }
    return sum;
};

// не трогать
module.exports = sumAll;
