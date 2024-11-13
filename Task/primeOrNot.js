function findPrimeOrNot(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}


// this also correct 


// function primeOrNot(number) {
//   if (findPrimeOrNot(number)) {
//     console.log(`${number} is prime`);
//   } else {
//     console.log(`${number} is not prime`);
//   }
// }

// optimization
function primeOrNot(number) {
  let result = findPrimeOrNot(number) ? "is prime" : "is not prime";
  console.log(`${number} ${result}`);
}

primeOrNot(4);
primeOrNot(5);
