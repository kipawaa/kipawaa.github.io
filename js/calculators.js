function isPrime(num=null) {
        // if num is not declared then assume this is being called by an html page, otherwise run like a normal function
        if (!num) {
                var num = document.getElementById('num').value
                var result = document.getElementById('result')
        }

        if (num < 2) {
                if (result) result.textContent = "Result: " + num + " is not prime";
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

        if (result) result.textContent = "Result: " + num + " is prime!";
        return true;
}


function getFactors(num=null) {
        if (!num) {
                var num = document.getElementById('num').value;
                var result = document.getElementById('result');
        }
        var factors = [];

        for (var i = 0; i <= num; i++) {
                if (num % i == 0) factors.push(i);
        }

        if (result) result.textContent = "Result: The factors of " + num + " are " + arrayToString(factors);
        return factors;
}


function getPrimeFactors(num=null) {
        if (!num) {
                var num = document.getElementById('num').value;
                var result = document.getElementById('result');
        }

        var factors = getFactors(num);

        var prime_factors = [];

        for (var i = 0; i < factors.length; i++) {
                if (isPrime(factors[i])) prime_factors.push(factors[i]);
        }

        if (result) result.textContent = "Result: The prime factors of " + num + " are: " + arrayToString(prime_factors);
        return prime_factors;
}


function product(arr) {
        var total = 1;

        for (var i = 0; i < arr.length; i++) {
                total *= arr[i];
        }

        return total;
}


function getPrimeDecomposition(num=null) {
        if (!num) {
                var num = document.getElementById('num').value;
                var result = document.getElementById('result');
        }

        var decomp = getPrimeFactors(num);

        while (product(decomp) < num) {
                var newFactors = getPrimeFactors(Math.floor(num / product(decomp)));
                decomp = decomp.concat(newFactors);
        }

        decomp.sort();
        if (result) result.textContent = "The prime decomposition of " + num + " is " + arrayToString(decomp);
        return decomp;
}


function arrayToString(arr) {
        var str = '';
        for (var i = 0; i < arr.length - 1; i++) {
               str = str + arr[i] + ", ";
        }

        return str + arr[arr.length - 1];
}
