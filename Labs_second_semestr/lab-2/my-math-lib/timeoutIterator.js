function timeoutIterator(iterator, seconds, processor = defaultProcessor) {
  if (!iterator || typeof iterator.next !== "function") {
    throw new TypeError("iterator must implement next()");
  }

  if (typeof seconds !== "number" || seconds <= 0) {
    throw new TypeError("seconds must be a positive number");
  }

  const endTime = Date.now() + seconds * 1000;
  let count = 0;

  while (Date.now() < endTime) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }

    count += 1;
    processor(value, count);
  }

  return count;
}

function defaultProcessor(value, index) {
  console.log(`[${index}]`, value);
}

function createNumberStatsProcessor(options = {}) {
  const { printEvery = 1000 } = options;
  let total = 0;

  return function processNumber(value, index) {
    if (typeof value !== "number") {
      console.log(`[${index}] non-number value:`, value);
      return;
    }

    total += value;
    if (index === 1 || index % printEvery === 0) {
      const average = total / index;
      console.log(
        `[${index}] value=${value} total=${total} avg=${average.toFixed(2)}`,
      );
    }
  };
}

module.exports = { timeoutIterator, createNumberStatsProcessor };
