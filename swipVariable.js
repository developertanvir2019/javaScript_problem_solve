// swap with temporary variable.
let name = "tanvir";
let age = 5;

let temp = age;
age = name;
name = temp;

// swap without temp variable

[name, age] = [age, name];
// console.log(name, age);
