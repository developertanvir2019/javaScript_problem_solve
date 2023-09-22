const arr = ["hello", "world", "java", "hello", "java"];
const countWord = (p) => {
  p.reduce((allName, name) => {
    console.log(allName);
  });
};

// countWord(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "tanvir", "nibir");
console.log(fruits);
