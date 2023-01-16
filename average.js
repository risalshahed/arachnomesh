const arr = [112, 24, 31, 203, 44, 24, 101, 203, 33, 56, 24];
arr.sort((a, b) => a - b);
// console.log(arr);

const minValue = arr[0];
const maxValue = arr[arr.length - 1];

const minLength = arr.reduce(function(n, val) {
  return n + (val === minValue);
}, 0);

const maxLength = arr.reduce(function(n, val) {
  return n + (val === maxValue);
}, 0);

// console.log(minLength);
// console.log(maxLength);

const average = (minValue * minLength + maxValue * maxLength) / (minLength + maxLength);

console.log(average);