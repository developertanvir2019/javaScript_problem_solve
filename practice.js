const checkLargeNumber = (arr) => {
    let large = 0
    for (let a of arr) {
        if (a > large) {
            large = a;
        }
    }
    return large;
}
const checkEvenNumber = (arr) => {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        }
    }
    return even
}
// let res = checkEvenNumber([21, 21, 11, 34, 55, 3, 421, 343, 432, 421, 212, 22])
// console.log(res);

const reverceStr = (str) => {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
// const result = reverceStr('tanvir')
// console.log(result);

const firstDuplicate = (arr) => {
    let firstdub = ''
    for (let a of arr) {
        if (!firstdub.includes(a)) {
            firstdub += a;
        }
        else {
            return a;
        }
    }
}
// console.log(firstDuplicate([1, 2, 3, 4, 4, 5, 6, 7]));