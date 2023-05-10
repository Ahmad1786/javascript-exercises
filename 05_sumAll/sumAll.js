const sumAll = function(x,y) {
    if (typeof(x) === 'number' && typeof(y) === 'number' && x>0 && y>0) {
        let sum = 0;

        if (y<x) {
            for (let i = y; i <= x; i++) {
                sum += i;
            }
        }
        else {
            for (let i = x; i <= y; i++) {
                sum += i;
            }
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
