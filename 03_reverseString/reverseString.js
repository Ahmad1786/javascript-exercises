const reverseString = function(string) {
    let x = '';
    for (let i = string.length -1; i >= 0; i--) {
        x += string.charAt(i);
    }
    return x
};

// Do not edit below this line
module.exports = reverseString;
