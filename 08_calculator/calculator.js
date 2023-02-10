const add = function(x, y) {
let adder = x + y
return adder
};

const subtract = function(x, y) {
if (x > y) {
  x = x
} else if (x < y) {
x = y
}
let minus = x - y
return minus
};

const sum = function(n) {
  let amount = n.reduce((a,b) => {
  return a + b;
}, 0)
return amount
};

const multiply = function(n) {
  let amount = n.reduce((a,b) => {
    return a * b;
  }, 1)
  return amount
};

const power = function(x, y) {
return x**y
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } 
  for (let i = n-1; i > 0; i--) {
  n *= i;
}
return n
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
