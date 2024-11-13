// this code is just practising the amicable or not that function is used to find the proper divisor or not without sum
function properDivisor(n) {
  let Divisor = [];
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      Divisor.push(i);
      sum += i;
    }
  }
  return { Divisor, sum };
}

let num1 = 220;
let num2 = 285;

const sum1 = properDivisor(num1);
const sum2 = properDivisor(num2);

if (num1 === sum2.sum && num2 === sum1.sum) {
  console.log("amicable number");
} else {
  console.log("not amicable ");
}
