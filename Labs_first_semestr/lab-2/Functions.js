"use strict";

function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const results = [];

  for (let i = 0; i < 10; i++) {
    const squaredValue = square(i);
    const cubedValue = cube(i);

    const avgResult = average(squaredValue, cubedValue);

    console.log(
      `i = ${i}: Average of Square(${squaredValue}) and Cube(${cubedValue}) is: ${avgResult}`
    );

    results.push(avgResult);
  }

  return results;
}

console.log("--- Starting Calculation Loop (i = 0 to 9) ---");
const finalArray = calculate();

console.log("\n--- Final Array Returned by calculate() ---");
console.log(finalArray);

console.log("-------------------------------------------");
