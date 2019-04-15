// Given a sum and an array of integers, write an algorithm that 
// determines if there are 2 numbers in the array that add up to the given sum.

const doesSumExist = (arr, target) => {
  const compliments = arr.map(v => target - v);
};

console.log(doesSumExist([1, 2, 3, 4], 7)); // true
console.log(doesSumExist([3, 5, 6, 7], 10)); // false
console.log(doesSumExist([5, 5, 6, 7], 10)); // true
