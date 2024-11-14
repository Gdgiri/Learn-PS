function oddOrEven(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      console.log(`${n[i]}=even`);
    } else {
      console.log(`${n[i]}=odd`);
    }
  }
}

oddOrEven([1, 2, 3, 4, 5]);
oddOrEven([22, 23, 24, 25, 26]);
oddOrEven([11, 13, 15, 16, 17]);
oddOrEven([21, 22, 23, 24, 25]);
oddOrEven([31, 42, 43, 34, 55]);
