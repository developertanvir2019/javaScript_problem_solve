const arr = ["hello", "world", "java", "hello", "java"];
const countWord = (p) => {
  p.reduce((allName, name) => {
    console.log(allName);
  });
};

// countWord(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
