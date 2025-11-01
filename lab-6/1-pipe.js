"use strict";

const pipe = (...funcs) => {
  if (funcs.some((fn) => typeof fn !== "function")) {
    throw new Error("pipe() accepts only functions");
  }
  return (value) => funcs.reduce((acc, fn) => fn(acc), value);
};

// Умова Шемседінова
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

// Приклади використання
const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

// Помилка при некоректному використанні
try {
  const f3 = pipe(inc, 7, cube);
  console.log(f3(10));
} catch (error) {
  console.log(error.toString()); // 👈 покаже лише "Error: pipe() accepts only functions"
}
