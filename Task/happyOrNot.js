

function isHappyNumber(num) {
    const alreadySeen = new Set();
  
    while (num !== 1 && !alreadySeen.has(num)) {
      alreadySeen.add(num);
  
      let sum = 0;
      let currentNum = num;
  
      while (currentNum > 0) {
        const digit = currentNum % 10;
        sum += digit * digit;
        currentNum = Math.floor(currentNum / 10);
      }
  
      num = sum;
    }
  
    return num === 1;
  }
  
  console.log(isHappyNumber(6));
  console.log(isHappyNumber(19));
  
