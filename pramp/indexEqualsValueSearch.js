// brute force
/*
function indexEqualsValueSearch(arr) {
  // your code goes here
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === i) return i
  }
  return -1
}
*/

function indexEqualsValueSearch(arr) {
  let start = 0; // 2
  let end = arr.length - 1;
  let midpoint = Math.floor((end + start) / 2);

  while (start <= end) {
    if (arr[midpoint] === midpoint) {
      return midpoint;
    } else if (arr[midpoint] < midpoint) {
      start = midpoint + 1;
      midpoint = Math.floor((end + start) / 2);
    } else {
      end = midpoint - 1;
      midpoint = Math.floor((end + start) / 2);
    }
  }
  return -1;
}

// [1, 2, 3, 4, 5]
