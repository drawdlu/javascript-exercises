const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	let total = 0;
  numArray.forEach( (num) => total += num);

  return total;
};

const multiply = function(numArray) {
	let total = 1;
  numArray.forEach( (num) => total *= num);

  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  
  return num * factorial(num - 1);
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
