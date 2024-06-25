function fibonacci(){ 
    let n1 = 0,n2 = 1, nextTerm;
    let fibonacciSeries =[];
    console.log('Fibonacci Series :');
    for (let i = 1; i <= number; i++) {
        fibonacciSeries.push(n1);
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return fibonacciSeries
}
const number = parseInt(prompt('Enter the Numbers of terms: '));
const result = fibonacci(number);
alert(result);