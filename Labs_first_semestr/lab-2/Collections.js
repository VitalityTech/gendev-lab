"use strict";

let mobilenumbers = [
  { name: "Vitaliy", phone: "+380680000001" },
  { name: "Richard", phone: "+380678888888" },
  { name: "Emma", phone: "+380987777777" },
  { name: "John", phone: "+380689999999" },
  { name: "Ivan", phone: "+380673333333" },
];

let findPhoneByName = (name) => {
  for (const object of mobilenumbers) {
    if (object.name === name) {
      return object.phone;
    }
  }
  return "Контакт не знайдено";
};

console.log("--- Пошук у масиві ---");
console.log(findPhoneByName("Vitaliy"));
console.log(findPhoneByName("Richard"));
console.log(findPhoneByName("Emma"));
console.log(findPhoneByName("John"));
console.log(findPhoneByName("Ivan"));
console.log(findPhoneByName("Andrii"));
console.log("\n");

const createHash = (people) => {
  const hash = {};
  for (const person of people) {
    hash[person.name] = person.phone;
  }
  return hash;
};

mobilenumbers = createHash(mobilenumbers);

findPhoneByName = (name) => {
  return mobilenumbers[name] || "Контакт не знайдено";
};

console.log("--- Пошук у хеші ---");
console.log(findPhoneByName("Vitaliy"));
console.log(findPhoneByName("Richard"));
console.log(findPhoneByName("Andrii"));
