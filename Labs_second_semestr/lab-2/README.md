# Lab 2 - Generators and Iterators

Author: Hladchenko Vitaliy
License: MIT

## Task 1

Implemented in `my-math-lib`:

- Infinite generators:
  - `incrementalCounterGenerator(start, step)`
  - `fibonacciGenerator()`
  - `roundRobinGenerator(items)`
  - `infiniteGenerator(start, step)` (compatibility alias around counter generator)
- Timeout iterator consumer:
  - `timeoutIterator(iterator, seconds, processor)`
  - `createNumberStatsProcessor({ printEvery })`

## Task 2

Project layout:

- `my-math-lib` - reusable library package
- `demo-app` - separate project demonstrating library usage

The demo app links the library via local dependency:

- `"vitaliy-math-lib": "file:../my-math-lib"`

## Run Example

```bash
cd demo-app
npm install
npm start
```

The demo prints samples from all generators and then consumes a number iterator for 2 seconds with rolling total/average statistics.
