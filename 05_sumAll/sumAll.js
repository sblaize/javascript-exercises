const sumAll = function(num1, num2) {
let biggerNum;
let smallerNum;
let finalSum;
if (num1>num2 && typeof num1 === "number" && typeof num2 === "number" && num1 > 0 && num2 > 0) {

const biggerNum = parseInt(num1);
const smallerNum = parseInt(num2);
const finalSum = (biggerNum/2) * (biggerNum + smallerNum)
return finalSum

} else if (num1<num2 && typeof num1 === "number" && typeof num2 === "number" && num1 > 0 && num2 > 0){

const biggerNum = parseInt(num2);
const smallerNum = parseInt(num1);
const first = biggerNum/2;
const second = biggerNum + smallerNum;
const finalSum = first * second
return finalSum
}
else if (num1 < 0 || num2 < 0) {
    return "ERROR"
} else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR"
}
};

// Do not edit below this line
module.exports = sumAll;
