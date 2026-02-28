"use strict";

// without reduce
function makeIp(ip = "127.0.0.1") {
  const parts = ip.split(".").map(Number);
  return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

// with reduce
function makeIpReduce(ip = "127.0.0.1") {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
}

console.log(makeIp("10.0.0.1"));
console.log(makeIpReduce("10.0.0.1"));

console.log(makeIp("127.0.0.1"));
console.log(makeIpReduce("127.0.0.1"));
