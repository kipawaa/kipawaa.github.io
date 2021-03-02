function isPrime() {
        // get num from HTML
        var num = document.getElementById('num').value;

        // get the result text field so it can be changed to reflect the output
        var result = document.getElementById('result');
        
        // check if any numbers <= sqrt num are divisors
        for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                        result.textContent = num + " is not prime"; // return false if a divisor is found
                        return false;
                }
        }
        
        // if no divisors are found, return true
        result.textContent = num + " is prime!";
        return true;
}
