function solution(dots) {
  const calculateSlope = ([x1, y1], [x2, y2]) =>
    Math.abs(y2 - y1) / Math.abs(x2 - x1);

  const pairs = [
    [dots[0], dots[1], dots[2], dots[3]],
    [dots[0], dots[2], dots[1], dots[3]],
    [dots[0], dots[3], dots[1], dots[2]]
  ];

  for (let pair of pairs) {
    if (calculateSlope(pair[0], pair[1]) === calculateSlope(pair[2], pair[3])) {
      return 1;
    }
  }

  return 0;
}