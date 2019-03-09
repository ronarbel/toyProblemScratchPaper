// Given a binary string eg: 101010101111101011, find the longest string of consecutive 1s

// -------- counter -------- //
const longestConsecutive1s4 = (s) => {
  let maxOnes = 0;
  let tempOnes = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      tempOnes += 1;
      maxOnes = Math.max(tempOnes, maxOnes);
    }
    if (s[i] === '0') tempOnes = 0;
  }
  return maxOnes;
};

// -------- two index pointers -------- //
const longestConsecutive1s = (s) => {
  let result = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1' && s[start] === '0') {
      start = i;
    }
    if (s[i] === '1' && s[start] === '1') {
      end = i;
      result = Math.max(end - start + 1, result);
    }
    if (s[i] === '0' && s[i + 1] === '0') {
      start = i;
      end = i;
    }
  }
  return result;
};

// -------- string.split solution -------- //
const longestConsecutive1s2 = (s) => {
  const oneGroups = s.split('0');
  let result = 0;
  oneGroups.forEach((oneGroup) => {
    result = Math.max(oneGroup.length, result);
  });
  return result;
};

// -------- replace k 0s -------- // 
const longestConsecutive1s3 = (s, k) => {
  let result = 0;
  let zeroCount = 0;
  let left = 0;
  for (let right = 0; right < s.length; right += 1) {
    if (s[right] === '0') zeroCount += 1;

    while (zeroCount > k) {
      if (s[left] === '0') zeroCount -= 1;
      left += 1;
    }

    result = Math.max(right - left + 1, result);
  }
  return result;
};

///////////////////
// BEST SOLUTION //
///////////////////

// -------- counter -------- //
const longestConsecutive1s4 = (s) => {
  let maxOnes = 0;
  let tempOnes = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      tempOnes += 1;
      maxOnes = Math.max(tempOnes, maxOnes);
    }
    if (s[i] === '0') tempOnes = 0;
  }
  return maxOnes;
};

// -------- replace one 0, counter -------- //
const longestConsecutive1s5 = (s) => {
  let maxTotal = 0;
  let leftOnes = 0;
  let rightOnes = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      rightOnes += 1;
      maxTotal = Math.max(leftOnes + rightOnes, maxTotal);
    }
    if (s[i] === '0') {
      leftOnes = rightOnes;
      rightOnes = 0;
    }
  }

  return maxTotal;
};

console.log(longestConsecutive1s5('110111'));

console.log(longestConsecutive1s5('0101000110111000111000')) // 6