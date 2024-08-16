const leapYears = function(years) {
    if(years % 4 == 0 && years % 100 == 0 && years % 400 != 0){
        return false
    } else if (years % 4 == 0 && years % 400 == 0){
        return true
    } else if (years % 4 == 0 && years % 100 != 0 && years % 400 != 0){
        return true
    } else {
        return false
    }
};

// ну ты понял
module.exports = leapYears;
