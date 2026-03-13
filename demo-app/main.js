const {
	infiniteGenerator,
	incrementalCounterGenerator,
	fibonacciGenerator,
	roundRobinGenerator,
	timeoutIterator,
	createNumberStatsProcessor
} = require('vitaliy-math-lib');

function printNext(label, iterator, count) {
	const values = [];
	for (let i = 0; i < count; i += 1) {
		values.push(iterator.next().value);
	}
	console.log(`${label}:`, values.join(', '));
}

console.log('=== Task 1 Demo: Generators and Timeout Iterators ===');

console.log('\n1) Infinite Generators');
printNext('incrementalCounterGenerator(10, 3)', incrementalCounterGenerator(10, 3), 6);
printNext('fibonacciGenerator()', fibonacciGenerator(), 8);
printNext("roundRobinGenerator(['A','B','C'])", roundRobinGenerator(['A', 'B', 'C']), 9);
printNext('infiniteGenerator(100)', infiniteGenerator(100), 5);

console.log('\n2) Timeout Iterator + Processing (2 seconds)');
const numberStream = incrementalCounterGenerator(1, 1);
const processedCount = timeoutIterator(
	numberStream,
	2,
	createNumberStatsProcessor({ printEvery: 5000000 })
);
console.log(`processed values: ${processedCount}`);
