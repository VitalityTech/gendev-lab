const lib = require('vitaliy-math-lib'); // або шлях '../my-math-lib', якщо не через npm.

console.log("\n=== ТЕСТ ЛАБИ 3 (Мемоїзація) ===");
const slowSum = (a, b) => a + b;
const fastSum = lib.memoize(slowSum, 2); // ліміт 2 запису

console.log("Рахуємо 2+2:", fastSum(2, 2)); 
console.log("Знову 2+2:", fastSum(2, 2)); // Має написати "з кешу"
console.log("Рахуємо 5+5:", fastSum(5, 5));