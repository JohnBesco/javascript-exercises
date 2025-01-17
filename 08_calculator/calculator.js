const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(numbers) {
  const x = numbers.reduce(function(prev, curr) {
    return curr + prev;
  }, 0)
	return x;
};

const multiply = function(numbers) {
  const multiplied = numbers.reduce((total, currentValue) => total * currentValue);
  return multiplied;
};


const power = function(x, y) {
  return x ** y;
};



const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else {
    return number * factorial ( number - 1);
  };
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
