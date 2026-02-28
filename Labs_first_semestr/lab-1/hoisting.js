'use strict'

// hoisting functions and variables

// output is undefined
console.log(myName);

// output is 'Vitaliy
var myName = "Vitaliy";
console.log(myName);

showName(myName);

function showName(name) {
  console.log("My name is " + name);
}
