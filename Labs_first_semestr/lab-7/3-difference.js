"use strict";

// Умова Шемседінова
const array1 = ["Beijing", "Kiev"];
const array2 = ["Kiev", "London", "Baghdad"];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']

// виконання
function difference(array1, array2) {
  const new_arr = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      new_arr.push(element);
    }
  }
  return new_arr;
}
