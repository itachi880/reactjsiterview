type Point = {
  x: number;
  y: number;
};
//! f(x)= Ax+B
//! A = (n * sumXY - sumX * sumY) / (n * sumXX - (sumX)^2)
//! B = (sumY - A * sumX) / n
function linearRegression(values: Point[]) {
  if (values.length < 2) {
    throw new Error("No data points provided for linear regression");
  }
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  for (const point of values) {
    sumX += point.x;
    sumY += point.y;
    sumXY += point.x * point.y;
    sumXX += point.x * point.x;
  }
  const n = values.length;

  const A = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const B = (sumY - A * sumX) / n;
  return { A, B };
}

const data_set = Array.from({ length: 20 }, (_, x) => ({
  x: x,
  y: Math.floor(Math.random() * 70) + x * Math.floor(Math.random() * 70),
}));

console.log("Data Set:", data_set);
console.log("Linear Regression ", linearRegression(data_set));
