function isPrime() {
        // get num from HTML
        var num = document.getElementById('num').value;
        
        // check if any numbers <= sqrt num are divisors
        for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) return false; // return false if a divisor is found
        }
        
        // if no divisors are found, return true
        return true;
}
