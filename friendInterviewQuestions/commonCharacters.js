// given two strings, return back the common characters in
// the order they appear in the first string. 


const commonChars = (s1, s2) => {
  const result = new Set();
  const s2Chars = new Set(s2.split(''));
  for (let i = 0; i < s1.length; i += 1) {
    if (s2Chars.has(s1[i])) result.add(s1[i]);
  }
  return [...result];
};


console.log(commonChars('hello', 'worldl')); // ['l']