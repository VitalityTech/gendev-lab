const { infiniteGenerator } = require("./infiniteGenerator");
const { memoize } = require('./memoization/memoization');
const {
  timeoutIterator,
  createNumberStatsProcessor,
} = require("./timeoutIterator");
const {
  incrementalCounterGenerator,
} = require("./generators/incrementalCounterGenerator");
const { fibonacciGenerator } = require("./generators/fibonacciGenerator");
const { roundRobinGenerator } = require("./generators/roundRobinGenerator");

module.exports = {
  infiniteGenerator,
  timeoutIterator,
  createNumberStatsProcessor,
  incrementalCounterGenerator,
  fibonacciGenerator,
  roundRobinGenerator,
  memoize
};
