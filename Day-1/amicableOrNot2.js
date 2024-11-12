function properDivisor(n) {
  const Divisor = [];
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      Divisor.push(i);
      sum += i;
    }
  }
  return { Divisor, sum };
}

const num1 = 220;
const num2 = 284;
const sNum1 = properDivisor(num1);
const sNum2 = properDivisor(num2);
console.log(sNum1.Divisor);
console.log(sNum1.sum);
console.log(sNum2.Divisor);
console.log(sNum2.sum);

if (sNum1.sum === num2 && sNum2.sum === num1) {
  console.log(`${num1} and ${num2} is a amicable number`);
} else {
  console.log(`${num1} and ${num2} is not a amicable number`);
}
