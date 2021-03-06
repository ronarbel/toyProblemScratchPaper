/* 
Narcissistic number
Given N, check whether it is a Narcissistic number or not.

Note:Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits

Examples :

Input : 153
Output : yes
Explanation: 1^3+5^3+3^3=153

Input : 1634
Output : yes
Explanation: 1^4+6^4+3^4+4^4=1634
*/

const isNarcissisticNumber = (n) => {
  const digits = n.toString().split('');
  let narcicissticSum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    const digit = Number(digits[i]);
    const narcAddition = digit ** digits.length;
    narcicissticSum += narcAddition;
  }
  return narcicissticSum === n;
};

console.log(isNarcissisticNumber(153)); // true
console.log(isNarcissisticNumber(1634)); // true
