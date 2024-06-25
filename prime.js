function findPrimeNumbers() {
    let primes = [];
    for (let num = 100; num <= 200; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && num > 1) {
            primes.push(num);
        }
    }
    
    return primes;
}

console.log("Prime numbers between 100 and 200:", findPrimeNumbers());
