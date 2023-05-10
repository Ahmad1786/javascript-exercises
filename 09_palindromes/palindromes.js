const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    let i = 0;
    let j = string.length-1;
    
    while(i < j) {
        if (string.charAt(i++) === string.charAt(j--)) {
        continue;
        }
        return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
