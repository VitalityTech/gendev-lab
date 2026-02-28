'use strict'

// function that creates an array of numbers from start to end
let range = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(15, 30));


// function that  creates an array of odd numbers from start to end
let rangeOdd = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(rangeOdd(15, 30))