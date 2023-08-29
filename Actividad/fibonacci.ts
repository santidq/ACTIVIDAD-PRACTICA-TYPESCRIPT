function generarFibonacci(n: number): number[] {
    const fibonacciSequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence;
}

const nFibonacci = 10;
const fibonacciNumbers = generarFibonacci(nFibonacci);
console.log(`Los primeros ${nFibonacci} números de Fibonacci: ${fibonacciNumbers.join(', ')}`);
