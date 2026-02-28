'use strict'

// scalar and object increment functions 

// function that increment's number 
function inc(n) {
  const result = n + 1;
  console.log(`inc(): отримав ${n}, повертаю ${result}`);
  return result;
}

const a = 5;
const b = inc(a);

console.dir({ a, b });

// function that increments object's n property
function inc(num) {
  num.n = num.n + 1;
  console.log(`inc(): нове значення n = ${num.n}`);
}

const obj = { n: 5 };
inc(obj);

console.dir(obj);