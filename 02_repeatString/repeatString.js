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
    const number = Math.floor(Math.random() * 1000)
    return string.repeat(number)
}
else if (string = "") {
    return ""
}
};



// Do not edit below this line
module.exports = repeatString;
