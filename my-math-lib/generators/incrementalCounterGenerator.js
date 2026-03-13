function* incrementalCounterGenerator(start = 0, step = 1) {
  let current = start;

  while (true) {
    yield current;
    current += step;
  }
}

module.exports = { incrementalCounterGenerator };
