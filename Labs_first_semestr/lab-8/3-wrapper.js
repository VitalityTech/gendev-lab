"use strict";

// Умова Шемсадінова
const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < args.length; i++) {
      const expectedType = types[i].name.toLowerCase();
      if (typeof args[i] !== expectedType) {
        throw new TypeError(`Argument ${i} must be ${expectedType}`);
      }
    }

    const result = fn(...args);
    const returnType = types[types.length - 1].name.toLowerCase();
    if (typeof result !== returnType) {
      throw new TypeError(`Return value must be ${returnType}`);
    }

    return result;
  };

// Приклад 1: додавання чисел
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1); // Output: 5

// Приклад 2: конкатенація рядків
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings("Hello ", "world!");
console.log(res2); // Output: Hello world!
