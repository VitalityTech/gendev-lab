"use strict";

// Приклад Шемседінова

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(m); // 9

function max(matrix) {
  let maxValue = matrix[0][0];
  for (let row of matrix) {
    for (let value of row) {
      if (value > maxValue) {
        maxValue = value;
      }
    }
  }
  return maxValue;
}
