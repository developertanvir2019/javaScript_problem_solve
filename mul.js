const mul = (x) => {
  return Math.sqrt(x).toFixed(3);
};
console.log(mul(36));

// calculate the sum of an array

const calculateSum = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(calculateSum([1, 2, 3, 4, 5, 6, 73]));
