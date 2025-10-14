"use strict";

const generateKey = (length, characters) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

const characters = "sbwsbwhbvewovnaewoighqeofv098765432";
const key = generateKey(15, characters);
console.log(key);
