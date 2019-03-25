// list of stock prices. Return logest count of contiguous
// price increase or decrease

// [1, 2, 3, 2, 4] // 3 (increased for 3 days);

const longestIncreasingOrDecreasing = (a) => {
  let maxIncreasing = 1;
  let curInc = 1;

  for (let i = 1; i < a.length; i += 1) {
    let curVal = a[i];
    let prevVal = a[i - 1];
    if (curVal > prevVal) {
      curInc += 1;
      maxIncreasing = Math.max(curInc, maxIncreasing);
    } else {
      curInc = 1;
    }
  }

  let maxDecreasing = 1;
  let curDec = 1;

  for (let i = 1; i < a.length; i += 1) {
    let curVal = a[i];
    let prevVal = a[i - 1];
    if (curVal < prevVal) {
      curDec += 1;
      maxDecreasing = Math.max(curDec, maxDecreasing);
    } else {
      curDec = 1;
    }
  }

  return Math.max(maxIncreasing, maxDecreasing);
};

const a1 = [1, 2, 3, 2, 4]; // 3 (increased for 3 days);
console.log(longestIncreasingOrDecreasing(a1)); //