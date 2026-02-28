"use strict";

// Умова Шемседінова
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]

// виконання
function unique(arr) {
  const new_arr = [];
  for (let element of arr) {
    if (!new_arr.includes(element)) {
      new_arr.push(element);
    }
  }
  return new_arr;
}
