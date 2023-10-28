const test = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      console.log("fizz");
    } else if (i % 5 == 0 && i % 3 !== 0) {
      console.log("buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
    } else {
      console.log(i);
    }
  }
};
// test();

const reverseSrt = (str) => {
  let text = "";
  for (let i = str.length - 1; i > 0; i--) {
    text += str[i];
  }
  return text;
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse("tah"));

console.log(reverseSrt("tanvir"));

const findLongestWord = (sentence) => {
  let allWords = sentence.split(" ");
  let longWord = "";
  for (let i = 0; i < allWords.length; i++) {
    if (allWords[i].length > longWord.length) {
      longWord = allWords[i];
    }
  }
  return longWord;
};

// console.log(findLongestWord('hswswwi tanvir is here now '));

// const data = 'ljfsai fei hi jfiaie eiafj '
// console.log(data.split('s'));

// how to empty an array?
let arrayForEmpty = [1, 2, 3, 4, 5, 2, 66, 21];

//1 arrayForEmpty.length = 0;

// arrayForEmpty = [];

arrayForEmpty.splice(0, arrayForEmpty.length);

// console.log(arrayForEmpty);
