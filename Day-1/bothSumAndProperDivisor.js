function properDivisor(n) {
  let sum = 0;
  let Divisor = [];

  for (let i = 1; i < n-1; i++) {
    if (n % i === 0) {
      Divisor.push(i);
      sum += i;
    }
  }

  return { sum, Divisor };
}

let number = 284;
let result = properDivisor(number);

console.log("Sum of divisors:", result.sum);
console.log("List of divisors:", result.Divisor);
