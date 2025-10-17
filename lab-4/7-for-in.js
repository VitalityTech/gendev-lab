"use strict";

// Приклад Шумседінова
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  hitler: { born: 1889, died: 1945 },
  jesus: { born: -4, died: 30 },
};

console.log(ages(persons));

function ages(necrologue) {
  for (const person in necrologue) {
    necrologue[person]["lived"] =
      necrologue[person]["died"] - necrologue[person]["born"];
  }
  return necrologue;
}
