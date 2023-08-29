function generarFibonacci(n) {
    var fibonacciSequence = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence;
}
var nFibonacci = 10;
var fibonacciNumbers = generarFibonacci(nFibonacci);
console.log("Los primeros ".concat(nFibonacci, " n\u00FAmeros de Fibonacci: ").concat(fibonacciNumbers.join(', ')));
