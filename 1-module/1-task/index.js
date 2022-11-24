function factorial(n) {
  if ( n === 0 || n === 1) return 1;

  for ( let i = n - 1; i > 1 ; i--) {
    n = n * i
  }
  return n
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120