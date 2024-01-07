const arr = ["hello", "world", "java", "hello", "java"];
const countWord = (p) => {
  p.reduce((allName, name) => {
    console.log(allName);
  });
};

const reduceArray = [1, 2, 3, 4, 5, 6, 7];
const sumOfReduce = reduceArray.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(sumOfReduce);
// countWord(arr);

// problem number 2

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "tanvir", "nibir");
console.log(fruits);
// এখানে ২ হচ্ছে সেই ইন্ডেক্স নাম্বার যেখান্ থেকে রিমুভ শুরু হবে এবং ১ হচ্ছে কতগুলো রিমুভ হবে।

const sortableArr = [2, 23, 43, 12, 453, 13, 88];
sortableArr.sort((a, b) => b - a);
console.log(sortableArr);
