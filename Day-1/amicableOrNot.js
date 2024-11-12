// Function to find the sum of proper divisors of a number
function sumOfProperDivisors(n) {
    let sum = 0;
    const divisors = []; // Array to store and display divisors
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        divisors.push(i); // Collect each divisor
        sum += i; // Add each divisor to the sum
      }
    }
    console.log(`Divisors of ${n}: ${divisors.join(", ")}`);
    return sum;
  }
  
  // Function to check if two numbers are amicable
  function areAmicable(num1, num2) {
    const sum1 = sumOfProperDivisors(num1); // Sum of divisors of num1
    const sum2 = sumOfProperDivisors(num2); // Sum of divisors of num2
    return sum1 === num2 && sum2 === num1;
  }
  
  // Example usage
  const num1 = 220;
  const num2 = 284;
  
  if (areAmicable(num1, num2)) {
    console.log(`${num1} and ${num2} are amicable numbers.`);
  } else {
    console.log(`${num1} and ${num2} are not amicable numbers.`);
  }
  