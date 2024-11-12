function sumProperDivisor(n) {
  let sum = 0;

  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

const number = 284;

console.log(sumProperDivisor(number));
