const {
  incrementalCounterGenerator,
} = require("./generators/incrementalCounterGenerator");

function* infiniteGenerator(start = 0, step = 1) {
  yield* incrementalCounterGenerator(start, step);
}

module.exports = { infiniteGenerator };
