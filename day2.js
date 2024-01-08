const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};
// console.log(palindrome('hikih'));

teFibonacci = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    let num = sequence[i - 1] + sequence[i - 2];
    sequence.push(num);
  }
  return sequence;
};

function findCommonElements(arr1, arr2) {
  const commonElements = [];

  // Iterate through the first array
  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];

    // Check if the current element is present in the second array
    if (arr2.includes(currentElement)) {
      // If it is, add it to the commonElements array
      commonElements.push(currentElement);

      // Remove the current element from the second array to avoid duplicates
      arr2.splice(arr2.indexOf(currentElement), 1);
    }
  }

  return commonElements;
}

console.log(
  findCommonElements(
    [21, 232, 1, 1, 2, 21, 3, 4],
    [232, 232, 1, 3, 2, 2, 2, 1, 3, 23, 322]
  )
);
