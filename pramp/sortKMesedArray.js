function sortKMessedArray(arr, k) {
  for (let i = 1; i < arr.length; i += 1) {
    let currentIndex = i;
    while (arr[currentIndex] < arr[currentIndex - 1] && (i - currentIndex) <= k) {
      let tempCurrent = arr[currentIndex];
      arr[currentIndex] = arr[currentIndex - 1];
      arr[currentIndex - 1] = tempCurrent;

      currentIndex -= 1;
      if (currentIndex < 0) break;
    }
  }

  return arr;
}

const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
const k = 2;
console.log(sortKMessedArray(arr, k));
