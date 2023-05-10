const fibonacci = function(n, memo={}) {
    if (+n in memo) {return memo[+n]}
    if (+n < 0 ) {return 'OOPS'}
    if (+n < 2 ) {return +n}

    memo[+n] = fibonacci(+n-1) + fibonacci(+n-2)
    return memo[+n]
};

// Do not edit below this line
module.exports = fibonacci;
