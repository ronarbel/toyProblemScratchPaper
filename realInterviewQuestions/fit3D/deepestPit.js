/*
You are given a  non-empty zero-indexed array A consisting of N integers is given. A pit in this aray is any triplet of integers (P, Q, R) such that:

0<= P < Q < R < N;
sequence [A[P], A[P+1],....,A[Q]] is strictly decreasing, i.e. A[P] > A[P+1]>....>A[Q];
sequence A[P+1],...,A[R] is strictly increasing, i.e. A[Q] < A[Q+1]<...< A[R].
The depth of a pit(P, Q, R) is the number min{A[P]-A[Q], A[R]-A[Q]}.

For example, consider array A consisting of 10 elements such that:

A[0] = 0 A[1] = 1 A[2] = 3 A[3] = -2 A[4] = 0 A[5] = 1 A[6] = 0 A[7] = -3 A[8] = 2 A[9] = 3

Triplet(2, 3, 4) is one of pits in this array, because sequence[A[2], A[3]] is strictly decreasing (3 > -2) and sequence [A[3], A[4]] is strictly increasing (-2 < 0). Its depth is min{A[2] -A[3], A[4] - A[3]} = 2. Triplet(2, 3, 5) is another pit with depth 3. Triplet (5, 7, 8) is yeet another pit with depth 4. There is no pit in this array deeper (i.e. having depth greater than 4.

Write a function:

function solution(A)
that, given a non-empty zero-indexed array A consisting of N integers, returns the depth of the deepest pit in array A. The function should return -1 if there are no pits in array A.

For example, consider array A consisting of 10 elements such that:

A[0] = 0 A[1] = 1 A[2] = 3 A[3] = -2 A[4] = 0 A[5] = 1 A[6] = 0 A[7] = -3 A[8] = 2 A[9] = 3

the function should return 4, as explained above.

Assume that:

N is an integer within the range[1...1,000,000];
each element of array A is an integer within the range [-100,000,000...100,000,000].
*/

const findDeepestPit = (a) => {
  let deepestPit = -1;
  let leftHeight = a[0];
  let rightHeight = a[a.length - 1];

  const depthInfos = [];

  for (let i = 0; i < a.length; i += 1) {
    const depthInfo = {};
    const curVal = a[i];
    const prevVal = a[i - 1];

    if (curVal >= prevVal) {
      leftHeight = curVal;
    }

    depthInfo.curVal = curVal;
    depthInfo.leftHeight = leftHeight;

    depthInfos.push(depthInfo);
  }

  for (let i = a.length - 1; i >= 0; i -= 1) {
    const depthInfo = depthInfos[i];
    const curVal = a[i];
    const prevVal = a[i + 1];

    if (curVal >= prevVal) {
      rightHeight = curVal;
    }

    depthInfo.rightHeight = rightHeight;
  }

  for (let i = 0; i < depthInfos.length; i += 1) {
    const { leftHeight, curVal, rightHeight } = depthInfos[i];

    const leftDepth = leftHeight - curVal;
    const rightDepth = rightHeight - curVal;

    const actualDepth = Math.min(leftDepth, rightDepth);

    if (actualDepth > 0) {
      deepestPit = Math.max(actualDepth, deepestPit);
    }
  }

  return deepestPit;
}

const depths = [0, 1, 3, -2, 0, 1, 0, -3, 2, 3]; // 4
const depths2 = [1, 2, 3, 4, 3, 3, 2]; // -1
const depths3 = [10, 8, 10, 9, 9, 8, 8, 7, 6, 7, 8, 8, 9, 9, 10]; // 2

console.log(findDeepestPit(depths));
console.log(findDeepestPit(depths2));
console.log(findDeepestPit(depths3));
