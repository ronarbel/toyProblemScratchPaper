const drawLine = (x1, x2, y1, y2) => {
  console.log('LINE');
};

const drawHTree = (x, y, length, depth) => {
  if (depth === 0) return;

  let leftX = x - length / 2;
  let rightX = x + length / 2;
  let topY = y + length / 2;
  let bottomY = y - length / 2;

  // draw center
  drawLine(leftX, rightX, y, y);
  // draw left
  drawLine(leftX, leftX, topY, bottomY);
  // draw right
  drawLine(rightX, rightX, topY, bottomY);

  let newLength = Math.sqrt(length);
  let newDepth = depth -= 1;
  drawHTree(leftX, topY, newLength, newDepth);
  drawHTree(leftX, bottomY, newLength, newDepth);
  drawHTree(rightX, topY, newLength, newDepth);
  drawHTree(rightX, bottomY, newLength, newDepth);
};
