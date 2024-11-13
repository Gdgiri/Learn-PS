const num1 = 220;
const num2 = 284;

function properDivisor(n) {
  const divisors = [];
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i);
      sum += i;
    }
  }
  return { divisors, sum };
}

const sNum1 = properDivisor(num1);
const sNum2 = properDivisor(num2);

// Check if the numbers are amicable
if (sNum1.sum === num2 && sNum2.sum === num1) {
  console.log(`${num1} and ${num2} are amicable numbers`);
} else {
  console.log(`${num1} and ${num2} are not amicable numbers`);
}
