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

sum(13);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(45);
