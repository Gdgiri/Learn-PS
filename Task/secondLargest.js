function secondLargest(n) {
  let sorted = [...n].sort((a, b) => b - a);
  return sorted[1];
}

let numbers = [
  [1, 2, 3, 4, 5],
  [7, 8, 1, 2, 3],
];

for (let i = 0; i < numbers.length; i++) {
  let result = secondLargest(numbers[i]);
  console.log(`Second largest number is: ${result}`);
}
