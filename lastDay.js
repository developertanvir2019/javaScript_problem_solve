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

function findMissingNumber(nums) {
  const n = nums.length + 1; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage:
const missingNumber = findMissingNumber([3, 0, 1]);
console.log(missingNumber); // Output: 2
