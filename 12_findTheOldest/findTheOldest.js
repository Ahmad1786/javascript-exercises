const findTheOldest = function(array) {
    let endingYearFirst = ("yearOfDeath" in array[0]) ? array[0]["yearOfDeath"] : new Date().getFullYear();
    let holder = endingYearFirst - array[0]["yearOfBirth"];
    
    return array.reduce((obj, elem) => {
        let endingYear = ("yearOfDeath" in elem) ? elem["yearOfDeath"] : new Date().getFullYear();
        let age = endingYear - elem["yearOfBirth"];
        if (age > holder) {
            holder = age;
            obj = elem;
        }
        return obj;
    }, array[0]);
};


// Do not edit below this line
module.exports = findTheOldest;
