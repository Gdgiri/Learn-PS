function properDivisor(n) {
  let Divisors = [];
  

  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      Divisors.push(i);
      
    }
  }
  return Divisors;
  
}

const number = 220;
console.log(properDivisor(number));

