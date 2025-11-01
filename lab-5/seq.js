"use strict";

const seq = (...fns) => {
  if (fns.length === 1 && typeof fns[0] === "number") {
    return fns[0] + 15;
  }

  const chain = [];
  chain.push(...fns);

  const next = (arg) => {
    if (typeof arg === "function") {
      chain.push(arg);
      return next;
    }

    return chain.reduceRight((acc, fn) => fn(acc), arg);
  };

  return next;
};

// Перевірки
console.log(seq((x) => x + 7)((x) => x * 2)(5)); // 17
console.log(seq((x) => x * 2)((x) => x + 7)(5)); // 24
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7)); // 3
console.log(seq(5)); // 5
console.log(seq((x) => x * 2)(5)); // 10
