function missNumber(num) {
  let n = 5;

  let sum = (n * (n + 1)) / 2;

  let total = 0;

  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return sum - total;
}

let testCases = [
  [2, 3, 4, 5],
  [1, 3, 4, 5],
  [1, 2, 4, 5],
  [1, 2, 3, 5],
  [1, 2, 3, 4],
];

for (let i = 0; i < testCases.length; i++) {
  let result = missNumber(testCases[i]);

  console.log(`missing number is= ${result}`);
}
