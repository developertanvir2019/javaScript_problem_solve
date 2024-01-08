function fizzBuzz(n) {
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    throw new Error("Invalid input. Please provide a positive integer.");
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

// Test the function now
// try {
//   const output = fizzBuzz(15);
//   console.log(output);
// } catch (error) {
//   console.error(error.message);
// }

const arr = new Array(5);
arr.forEach((item) => {
  console.log(item);
});
