// Example: count types in a big array
const myArray = [
  true,
  45,
  "javascript",
  false,
  78,
  "php",
  null,
  undefined,
  0,
  [7, 8, 9, 10],
  NaN,
  3.14,
  { a: 5 },
  Symbol("v"),
  () => {},
  BigInt(10),
];

// function that counts the types of elements in an array
const countTypes = (array) => {
  const types = {};

  for (const element of array) {
    let type;
    if (element === null) {
      type = "null";
    } else if (Array.isArray(element)) {
      type = "array";
    } else {
      type = typeof element;
    }
    types[type] = (types[type] ?? 0) + 1;
  }
  return types;
};

console.dir(countTypes(myArray));
