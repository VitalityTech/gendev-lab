"use strict";

// Умова Шемседінова
const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first

console.log(arr.pop()); // Виводить: undefined

// Виконання
function array() {
  const data = [];

  const arr = (i) => data[i];
  arr.push = (v) => (data[data.length] = v);
  arr.pop = () => (data.length ? data.splice(-1)[0] : undefined);

  return arr;
}
