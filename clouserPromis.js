// function delay(i) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(i);
//     }, i * 1000);
//   });
// }

// const timer = async (n) => {
//   console.log("start timer");
//   for (let i = 0; i <= n; i++) {
//     const result = await delay(i);
//     console.log(result);
//   }
//   console.log("end timer");
// };

// timer(3);

// find the second largest number in a array

const secondLarge = (arr) => {
  let sortDec = arr.sort((a, b) => b - a);
  return sortDec[1];
};

let ans = secondLarge([1, 2, 53, 23, 444, 223, 412, 32, 756]);
console.log(ans);

// another way to write debounce function
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
