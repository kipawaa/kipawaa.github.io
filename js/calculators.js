function isPrime() {
        var num = document.getElementById('num').value
        var result = document.getElementById('result')

        for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                        result.textContent = "Result: " + num + " is not prime";
                        return false;
                }
        }

        result.textContent = "Result: " + num + " is prime!";
        return true;
}


function getFactors() {
        var num = document.getElementById('num').value
        var result = document.getElementById('result')
        var factors = [];

        for (var i = 0; i <= num; i++) {
                if (num % i == 0) factors.push(i);
        }

        result.textContent = "Result: The factors of " + num + " are " + arrayToString(factors);
        return factors;
}


function arrayToString(arr) {
        var str = '';
        for (var i = 0; i < arr.length - 1; i++) {
               str = str + arr[i] + ", ";
        }

        return str + arr[arr.length - 1];
}
