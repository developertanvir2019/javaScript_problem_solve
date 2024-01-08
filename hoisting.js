// hoisting বলতে বুঝায় কোন ভ্যারিয়েবল ডিক্লেয়ার করার আগেই সেটা ইউস করা যায়।
// অর্থাৎ জাভাস্ক্রিপ্ট ডিফল্ট হিসেবে ডিক্লেয়ার করা ভ্যারিয়েবলকে hoist করে ফেলে বা উপরে তুলে ফেলে,
// এবং var এর ক্ষেত্রে ভ্যালু undefined সেট করে দেয়।

x = 0; //assign value
// console.log(x);
var x = 0; //declare

// নিচে রেফারেন্স এরর দিবে কারন let ও const এর ক্ষেত্রে ভ্যারিয়েবল উপরে তুলে ঠিকই কিন্তু var এর মত undefined সেট করে না।

x = 0; //assign value
// console.log(x);
// let x = 0; //declare

const fizbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// fizbuzz();

// debounce

// const debounce = (fn, delay) => {
//   let timeoutId;
//   return (arg) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn(arg);
//     }, delay);
//   };
// };
// const deboFn = debounce(() => {
//   console.log("debounce is working perfectly");
// }, 1002);

// deboFn();
