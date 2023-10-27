// const check = (str) => {
//     let vowels = 'aeiouAEIOU';
//     count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count += 1;
//         }
//     }
//     return count;
// }
// const ss = check('ajfeaiajakd')
// console.log(ss);

const check = (str) => {
  let vowels = "aeiouAEIOU";
  count = 0;
  for (let st of str) {
    if (vowels.includes(st)) {
      count += 1;
    }
  }
  return count;
};

const duplicateNumber = (arr) => {
  let newNum = [];
  for (i = 0; i < arr.length; i++) {
    if (newNum.includes(arr[i])) {
      return arr[i];
    } else {
      newNum.push(arr[i]);
    }
  }
};

// console.log(duplicateNumber([2, 3, 4, 5, 6, 7, 3, 5, 2]));

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(3));
