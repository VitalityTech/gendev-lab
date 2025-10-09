"use strict";

const fn = () => {
  const obj1 = { name: "Vitaliy" };
  let obj2 = { name: "Alex" };

  console.log(obj1, obj2)

  obj1.name = 'Emanuel';
  obj2.name = 'John';

  console.log(obj1, obj2)
};

fn();

let createUser = (name, city) => {
    return {name, city}
}

console.log('Vitaliy', 'Kyiv')