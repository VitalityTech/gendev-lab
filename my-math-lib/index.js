const { infiniteGenerator } = require('./infiniteGenerator');
const { timeoutIterator, createNumberStatsProcessor } = require('./timeoutIterator');
const { incrementalCounterGenerator } = require('./generators/incrementalCounterGenerator');
const { fibonacciGenerator } = require('./generators/fibonacciGenerator');
const { roundRobinGenerator } = require('./generators/roundRobinGenerator');

module.exports = {
	infiniteGenerator,
	timeoutIterator,
	createNumberStatsProcessor,
	incrementalCounterGenerator,
	fibonacciGenerator,
	roundRobinGenerator
};