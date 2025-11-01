"use strict";

const compose = (...fns) => {
  if (fns.some((f) => typeof f !== "function"))
    throw Error("compose() accepts only functions");
  const fn = (x) => {
    try {
      return fns.reduceRight((v, f) => f(v), x);
    } catch (e) {
      fn._err && fn._err(e);
      return undefined;
    }
  };
  fn.on = (ev, h) => (ev === "error" && (fn._err = h), fn);
  return fn;
};

// 🔹 Приклади:
const inc = (x) => ++x,
  twice = (x) => x * 2,
  cube = (x) => x ** 3,
  bad = (_) => {
    throw Error("broken");
  };

const f1 = compose(inc, twice, cube);
console.log(f1(5)); // 251

const f2 = compose(inc, bad, cube).on("error", (e) =>
  console.log("Помилка:", e.message)
);

console.log(f2(2)); // undefined
