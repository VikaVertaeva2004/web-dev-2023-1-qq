function fibb(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else if (n <= 1000) {
      let fib1 = 0;
      let fib2 = 1;
      let fibN = 0;
      for (let i = 2; i <= n; i++) {
        fibN = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibN;
      }
      return fibN;
    } else {
      return "n должно быть не больше 1000";
    }
  }