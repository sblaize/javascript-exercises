const repeatString = function(string, num) {
if (num>0) {
    return string.repeat(num)
}
else if (num === 0) {
    return ""
}
else if (num < 0) {
    return "ERROR"
}
else if (num = "") {
    let max = 1000;
    let min = 1;
    const randomInt = function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    return string.repeat(randomInt)
}
else if (string = "") {
    return ""
}
};



// Do not edit below this line
module.exports = repeatString;
