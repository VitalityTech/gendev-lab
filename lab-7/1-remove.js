"use strict";

// Умова Шемсадінова
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 50);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(arr, item) {
  for (let element of arr) {
    if (element === item) {
      arr.splice(arr.indexOf(element), 1);
    }
  }
  return arr;
}

// Умова Шемсадінова
const cities = ["Kiev", "Beijing", "Lima", "Washington"];
removeElements(cities, "Lima", "Berlin", "Kiev");
console.log(cities);
// Результат: ['Beijing', 'Washington']

// виконання
function removeElements(arr, ...items) {
  for (let item of items) {
    removeElement(arr, item);
  }
}
