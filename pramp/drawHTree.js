const drawLine = (x1, y1, x2, y2) => {
  console.log(x1, y1, x2, y2);
};

const drawHTree = (x, y, length, depth) => {
  if (depth === 0) return;

  const leftX = x - length / 2;
  const rightX = x + length / 2;
  const topY = y + length / 2;
  const bottomY = y - length / 2;

  // draw center
  drawLine(leftX, rightX, y, y);
  // draw left
  drawLine(leftX, leftX, topY, bottomY);
  // draw right
  drawLine(rightX, rightX, topY, bottomY);

  const newLength = Math.sqrt(length);
  drawHTree(leftX, topY, newLength, depth - 1);
  drawHTree(leftX, bottomY, newLength, depth - 1);
  drawHTree(rightX, topY, newLength, depth - 1);
  drawHTree(rightX, bottomY, newLength, depth - 1);
};
