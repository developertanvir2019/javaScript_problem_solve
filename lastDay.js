function debounce(func, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage:
function search(query) {
  console.log(`Searching for: ${query}`);
  // Actual search logic can be placed here
}

const debouncedSearch = debounce(search, 500); // Debounce with a delay of 500 milliseconds

// Simulate user typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
// After 500 milliseconds of inactivity, the search function will be invoked with the final query "Java"

function findMissingNumber(nums) {
  const n = nums.length + 1; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage:
const missingNumber = findMissingNumber([3, 0, 1]);
console.log(missingNumber); // Output: 2
