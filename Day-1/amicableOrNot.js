// Step 1: Make the number proper divisor
function properDivisors(n) {
  const divisors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// Step 2: Calculate sum of divisors
function sumOfDivisors(divisors) {
  return divisors.reduce((sum, divisor) => sum + divisor, 0);
}

// Step 3: Check if numbers are amicable
function areAmicable(num1, num2) {
  const divisors1 = properDivisors(num1);
  const divisors2 = properDivisors(num2);

  const sum1 = sumOfDivisors(divisors1);
  const sum2 = sumOfDivisors(divisors2);

  // Display divisors
  console.log(`Divisors of ${num1}: ${divisors1.join(", ")}`);
  console.log(`Divisors of ${num2}: ${divisors2.join(", ")}`);

  return sum1 === num2 && sum2 === num1;
}

// Input numbers
const num1 = 220;
const num2 = 284;

// Step 4: Display if the numbers are amicable
if (areAmicable(num1, num2)) {
  console.log(`${num1} and ${num2} are amicable numbers.`);
} else {
  console.log(`${num1} and ${num2} are not amicable numbers.`);
}
