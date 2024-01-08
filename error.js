//**************@@@@@@@@@@@*referenceError@@@@@@@@@@@@@*********************************

// যদি এমন কিছু পেতে চাই যেটার অস্তিত্ত নেই বা সেটা স্কোপের বাহির থেকে এক্সেস করার চেষ্টা করা হচ্ছে তাহলে রেফারেন্স ইরর দেয়।
// let ans = 4 / a;
// console.log(ans);

// function myFunction() {
//     var localVar = 'Hello';
// }

// console.log(localVar);

// console.log(myVariable);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@---typeError-----@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const a = 5;
// a = 3;
// console.log(a);

// var obj = {};
// obj();                   // TypeError: obj is not a function

// var x = "Hello";
// var y = 5;
// console.log(x / y);          // TypeError: Cannot convert string to number

// var obj = null;  // এটা অবজেক্ট নয় তাই টাইপএরর। এটা যদি  অব্জেক্ট হতো তাহলে আনডিফাইন হতো; যেমন var obj={};
// console.log(obj.property); // TypeError: Cannot read property 'property' of null

// 2.It is not return any error because old javaScript has no var, let or const;
a = 4;
z = a;
// console.log(z);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@---rangeError-----@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// var arr = new Array(-1);
// console.log(arr)
