// Given a binary string 101010101111101011, find the longest string of consecutive 1s
// 0011101110000111100 >> 6
const longestConsecutive1s = (s) => {
  let result = 0;
  let start = 0;
  let end = 0;
  debugger;
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
}

const longestConsecutive1s2 = (s) => {
  let oneGroups = s.split('0');
  let result = 0;
  oneGroups.forEach(oneGroup => {
    result = Math.max(oneGroup.length, result);
  });
  return result;
}

console.log(longestConsecutive1s('101010101111101011')) // 5
console.log(longestConsecutive1s2('101010101111101011')) // 5


// Find longest consecutive 1s, but you can remove at most one 0 from the string
// On coderpad
