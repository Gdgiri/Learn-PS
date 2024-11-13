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

function primeOrNot(number) {
  if (findPrimeOrNot(number)) {
    console.log(`${number} is prime`);
  } else {
    console.log(`${number} is not prime`);
  }
}

primeOrNot(4);
primeOrNot(5);
