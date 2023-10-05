const sumOfAll = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};
let result = sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

// short by a-z;

const sortStrings = (str) => {
  r = str.map((str) => str.toLowerCase());
  r.sort();
  return r;
};

// console.log(sortStrings(["banana", "Apple", "cherry", "date", "FIG"]));

// short z-a;
// function sortStrings(arr) {
//   arr = arr.map((str) => str.toLowerCase());
//   arr.sort().reverse();
//   return arr;
// }

let short = ["banana", "Apple", "cherry", "date", "FIG"]
  .map((s) => s.toLocaleLowerCase())
  .sort();
// console.log(short);
