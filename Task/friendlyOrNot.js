function properDivisor(n) {
  let Divisor = [];
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      Divisor.push(i);
      sum += i;
    }
  }

  return { Divisor, sum };
}
let num1 = 6;
let num2 = 28;

let sum1 = properDivisor(num1);
let sum2 = properDivisor(num2);

let divSum1 = sum1.sum / num1;
let divSum2 = sum2.sum / num2;

if (divSum1 === divSum2) {
  console.log(`${num1} and ${num2} are friendly number`);
} else {
  console.log(`${num1} and ${num2} are not friendly number`);
}
