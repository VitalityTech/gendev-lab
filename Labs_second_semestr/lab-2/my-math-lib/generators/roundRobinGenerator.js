function* roundRobinGenerator(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError("items must be a non-empty array");
  }

  let index = 0;

  while (true) {
    yield items[index];
    index = (index + 1) % items.length;
  }
}

module.exports = { roundRobinGenerator };
