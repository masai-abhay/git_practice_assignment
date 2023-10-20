function isPrime(number) {
    if (number <= 1) {  
      return false;
    }
    if (number === 2) {
      return true;
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    } 
    return true;
  }

  function PrintPrime() {
    for (let i = 2; i <= 20; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  PrintPrime();
//   here on this code line 2(ommoted < before =) & 17(ommoted < before =) & 19 (i should be printed instead of num) are intentionally written wrong