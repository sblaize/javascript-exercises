const ftoc = function(f) {
let fMinus = f-32;
let top = fMinus * 5;
let c = top/9
if (c > 0 || c < 0) {
  return parseFloat(c.toFixed(1))
  } else {
    return 0
  }
};

const ctof = function(c) {
  let cMultiply = c*((9/5));
  let f = cMultiply + 32
  if (f > 0 || f < 0) {
  return parseFloat(f.toFixed(1))
  } else {
    return 0
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
