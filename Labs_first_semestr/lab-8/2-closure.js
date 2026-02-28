"use strict";

// виконання
const store = (value) => () => value;

// Умова Шемседінова
const read = store(5);
const value = read();
console.log(value); // Output: 5
