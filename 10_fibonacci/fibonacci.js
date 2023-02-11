const fibonacci = function(n) {
    let Phi = (Math.sqrt(5) + 1)/(2)
    let phi =(Phi - 1)
    let fib = (Phi**n - (-phi)**n)/(Math.sqrt(5))
    if (n < 0){
        return 'OOPS'
    } else {
        return Math.abs(parseInt(fib));
}};


// Do not edit below this line
module.exports = fibonacci;
