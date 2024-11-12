// step-1 make the number proper divisor

function properDivisor(n) {
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// step 2 check that number amicable or not
function areAmicable(num1, num2) {
  const sum1 = properDivisor(num1);
  const sum2 = properDivisor(num2);

  if (sum1 === num2 && sum2 === num1) {
    return true;
  } else {
    return false;
  }
}

const num1 = 220;
const num2 = 284;

// step-3 display it amicable or not

if (areAmicable(num1, num2)) {
  console.log(`${num1} and ${num2} are amicable numbers.`);
} else {
  console.log(`${num1} and ${num2} are not amicable numbers.`);
}
