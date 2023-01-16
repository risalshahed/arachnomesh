const arr = [12, 24, 36, 24, 0, 48, 10, 24, 38];
const len = arr.length;

const total = arr.reduce(function(prevValue, currentValue) {
  const sum = prevValue + currentValue;
  // console.log(sum);
  return sum;
});

const average = total / len;
console.log(average);

let countLengthOfAverageValue = 0;

for (let i = 0; i < len; i++) {
  if(arr[i] === average) {
    countLengthOfAverageValue++;
  }
}

console.log(countLengthOfAverageValue);