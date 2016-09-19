'use strict';

/**
 * Get all prime numbers using
 * Sieve of Eratosthenes Algorithm
 */

(function() {

  const Primes = function(n) {

    let primes = [];

    for (let i = 0; i <= n; i++) {
      primes[i] = true;
    }

    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i <= n; i++) {
      if (primes[i]) {
        for (let j = 2; i * j <= n; j++) {
          primes[i * j] = false;
        }
      }
    }

    return {
      sum: function() {
        let i = 0;
        primes.forEach(function(prime) {
          if (prime) {
            i += prime;
          }
        });
        return i;
      },
      list: function() {
        let list = [];
        primes.forEach(function(prime, i) {
          if (prime) {
            list.push(i);
          }
        });
        return list;
      }
    };
  };

  /**
   * Test
   */
  var prime = Primes(400);
  console.log(prime.sum());
  console.log(prime.list());

})();
