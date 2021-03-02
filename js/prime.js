for (var i = 0; i < 10; i++) {
        console.log(isPrime(i));
}

function isPrime(num) {
        for (var i = 2; i < Math.sqrt(num); i++) {
                if (num % i == 0) return false;
        }

        return true;
}
