// Given a binary string 101010101111101011, find the longest string of consecutive 1s
// 0011101110000111100 >> 6
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

const longestConsecutive1s2 = (s) => {
  const oneGroups = s.split('0');
  let result = 0;
  oneGroups.forEach((oneGroup) => {
    result = Math.max(oneGroup.length, result);
  });
  return result;
};

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

console.log(longestConsecutive1s3('0101000110111000111000', 1)) // 6