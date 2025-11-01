"use strict";

// Умова Шемсадінова
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

// Виконання
function iterate(object, callback) {
  for (let key in object) {
    callback(key, object[key]);
  }
}
