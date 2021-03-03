function isPrime(num=null) {
        // if num is not declared then assume this is being called by an html page, otherwise run like a normal function
        if (!num) {
                var num = document.getElementById('num').value
                var result = document.getElementById('result')
        }

        if (num < 2) {
                if (result) {
                        result.textContent = "Result: " + num + " is not prime";
                }
                return false;
        }

        for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                        if (result) {
                                result.textContent = "Result: " + num + " is not prime";
                        }
                        return false;
                }
        }

        if (result) {
                result.textContent = "Result: " + num + " is prime!";
        }
        return true;
}


function getFactors() {
        var num = document.getElementById('num').value;
        var result = document.getElementById('result');
        var factors = [];

        for (var i = 0; i <= num; i++) {
                if (num % i == 0) factors.push(i);
        }

        result.textContent = "Result: The factors of " + num + " are " + arrayToString(factors);
        return factors;
}


function getPrimeFactors() {
        var num = document.getElementById('num').value;
        var result = document.getElementById('result');

        var factors = getFactors();

        var prime_factors = [];

        for (var i = 0; i < factors.length; i++) {
                if (isPrime(factors[i])) prime_factors.push(factors[i]);
        }

        result.textContent = "Result: The prime factors of " + num + " are: " + arrayToString(prime_factors);
        return prime_factors;
}


function arrayToString(arr) {
        var str = '';
        for (var i = 0; i < arr.length - 1; i++) {
               str = str + arr[i] + ", ";
        }

        return str + arr[arr.length - 1];
}
