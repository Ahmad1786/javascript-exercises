const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR'
    }
    let x = '';
    for (let i = 0; i<n; i++) {
        x += string;
    }
    return x;
};

// Do not edit below this line
module.exports = repeatString;
