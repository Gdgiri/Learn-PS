function isHappy(num) {
  let seenNumbers = new Set();
  let originalNum = num;

  while (num !== 1 && !seenNumbers.has(num)) {
    seenNumbers.add(num);

    let digit = num.toString();
    let digit0 = digit[0];
    let digit1 = digit[1] || "0";

    num =
      parseInt(digit0) * parseInt(digit0) + parseInt(digit1) * parseInt(digit1);
  }

  if (num === 1) {
    console.log(`${originalNum} is a happy number`);
  } else {
    console.log(`${originalNum} is not a happy number`);
  }
}

isHappy(19);
isHappy(9);
