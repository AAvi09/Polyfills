function printNumber(n) {
  if (n < 1) {
    return;
  }
  printNumber(n - 1);
  console.log(n);
}

printNumber(10);

function sum(n) {
  if (n == 0) {
    return 0;
  }
  console.log(n);
  return n + sum(n - 1);
}

sum(10);
