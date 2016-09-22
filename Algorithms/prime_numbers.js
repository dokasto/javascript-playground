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

  describe('Should get all Prime numbers with Sieve of Eratosthenes in 400', function() {

    it('Sum should be 78', function() {
      var prime = Primes(400);
      expect(prime.sum()).toEqual(78);
    });

  });

})();
