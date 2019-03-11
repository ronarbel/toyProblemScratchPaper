// min of max on right and max on left
var trap = function(a) {
  const columnLeftRightHeights = [];
  
  let tempLeftMaxHeight = 0
  for (let i = 0; i < a.length; i += 1) {
      columnLeftRightHeights[i] = {height: a[i]};
      columnLeftRightHeights[i].leftMax = tempLeftMaxHeight;
      tempLeftMaxHeight = Math.max(a[i], tempLeftMaxHeight);
  }
  
  let tempRightMaxHeight = 0;
  for (let i = a.length - 1; i >= 0; i -= 1) {
      columnLeftRightHeights[i].rightMax = tempRightMaxHeight;
      tempRightMaxHeight = Math.max(a[i], tempRightMaxHeight);
  }
  
  let result = 0;
  for (i in columnLeftRightHeights) {
      const column = columnLeftRightHeights[i];
      const waterHeight = Math.min(column.leftMax, column.rightMax);
      const columnWaterStorage = Math.max(0, waterHeight - column.height);
      result += columnWaterStorage;
  }
  
  return result
};
