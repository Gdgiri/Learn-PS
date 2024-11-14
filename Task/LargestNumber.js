function largestNumber(n) {
  let largest = Math.max(...n);
  return largest;
}

let numbers = [
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7],
  [7, 8, 9, 10, 11, 12],
];
for (i = 0; i < numbers.length; i++) {
  let result = largestNumber(numbers[i]);
  console.log(result);
}
