const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(i => {sum += i});
  return sum
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(i => {sum = (sum*i)});
  return sum
};

const power = function(x,y) {
  return x**y
};

const factorial = function(x) {
	if (x<2) {
    return 1
  }
  else return x*factorial(x-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
