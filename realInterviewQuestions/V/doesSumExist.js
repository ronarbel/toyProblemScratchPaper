// Given a sum and an array of integers, write an algorithm that 
// determines if there are 2 numbers in the array that add up to the given sum.

// naïve solution
const doesSumExist = (arr, target) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};

console.log(doesSumExist([1, 2, 3, 4], 7)); // true
console.log(doesSumExist([5, 6, 7], 10)); // false
console.log(doesSumExist([5, 5, 6, 7], 10)); // true
