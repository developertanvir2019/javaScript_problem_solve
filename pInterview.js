// what is the difference between setInterval and setTimeout ?

//  If we call a function by setTimeOut it call the function once after specific time. 
//  If we call a function by setInterval it call again and again after specific time , but we can stop the rendering  conditionally by clearInterval.

let num = 0;
const timeout = () => {
    console.log(num++);
    if (num > 9) {
        clearInterval(interval)
    }
}
let interval = setInterval(timeout, 200)

// const name = "name";
// const user = {
//     name: name,
//     arr: [1, 2, 3],
// };

// const myName = user;

// myName.arr.push(6);

// myName[name] = "updated Name";

// console.log(myName);
// console.log(user);




