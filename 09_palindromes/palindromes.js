const palindromes = function (str) {
    var re = /[\W_]/g;
    var orgStr = str.toLowerCase().replace(re, '');
    var reverseStr = orgStr.split('').reverse().join(''); 
    return reverseStr === orgStr;
  };

// Do not edit below this line
module.exports = palindromes;
