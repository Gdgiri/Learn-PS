let kthLargest = (n, k) => {
  let sorted = [...n].sort((a, b) => b - a);
  return sorted[k - 1];
};

let numbers = [
  [[1, 2, 3, 4, 5], 1],
  [[1, 2, 3, 4, 5], 2],
  [[1, 2, 3, 4, 5], 3],
  [[1, 2, 3, 4, 5], 4],
  [[1, 2, 3, 4, 5], 5],
];

for (let i = 0; i < numbers.length; i++) {
  let result = kthLargest(...numbers[i]);
  console.log(result);
}
