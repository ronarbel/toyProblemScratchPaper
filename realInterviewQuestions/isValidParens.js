const isValidParens = (s) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') left += 1;
    if (s[i] === ')') right += 1;
    if (right > left) return false;
  }
  return left === right;
};

console.log(isValidParens('(((((((())))))))')); // true
console.log(isValidParens('()()()()')); // true
console.log(isValidParens(')()')); // false
console.log(isValidParens('(((()))))()')); // false
console.log(isValidParens('()(')); // false
