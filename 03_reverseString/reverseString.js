const reverseString = function(string) {
if (string) {
const rs = string.split('');
const rsflip = rs.reverse()
return   rsflip.join("");
}
else {
    return ""
}
};

// Do not edit below this line
module.exports = reverseString;
