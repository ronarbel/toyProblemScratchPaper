// Uber phone screen: Given two lists of disjoint intervals, return their overlaps

// 1: [(5, 10), (16, 20), (50, 60)]
// 2: [(3, 7), (9, 58)]
// => [(5, 7), (9, 10), (16, 20), (50, 58)]

//    ------     -----                 ----------
//  ----- -------------------------------------

const disjointIntervals = (lA, lB) => {
  let AIdx = 0;
  let BIdx = 0;

  const res = [];
  while (AIdx < lA.length && BIdx < lB.length) {
    let lo = Math.max(lA[AIdx][0], lB[BIdx][0]);
    let hi = Math.min(lA[AIdx][1], lB[BIdx][1]);

    if (lo <= hi) {
      res.push([lo, hi]);
    }

    if (lA[AIdx][1] < lB[BIdx][1]) {
      AIdx += 1;
    } else {
      BIdx += 1;
    }
  }
  return res;
};

const lA = [[5, 10], [16, 20], [50, 60]]
const lB = [[3, 7], [9, 58]];

console.log(disjointIntervals(lA, lB)); // => [(5, 7), (9, 10), (16, 20), (50, 58)]
