// what is the difference between setInterval and setTimeout ?

//  If we call a function by setTimeOut it call the function once after specific time.
//  If we call a function by setInterval it call again and again after specific time , but we can stop the rendering  conditionally by clearInterval.

let num = 0;
const timeout = () => {
  console.log(num++);
  if (num > 9) {
    clearInterval(interval);
  }
};
// let interval = setInterval(timeout, 200)

const name = "name";
const user = {
  name: name,
  arr: [1, 2, 3],
};

const myName = user;

myName.arr.push(6);

myName[name] = "updated Name";

// console.log(myName);
// console.log(user);

// we can access from access by below way.
const tanvir = { ami: "aci", tumi: "nai" };
console.log(tanvir["ami"]);

// [{name: "A"}, {name: "B"}]
// age: 10, 20
// how can I put age in above array  10 and 20;

const array = [{ name: "A" }, { name: "B" }];
const ages = [10, 20];

for (let i = 0; i < array.length; i++) {
  array[i].age = ages[i];
}
console.log(array);
