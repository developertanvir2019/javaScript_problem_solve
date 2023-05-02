let unique = (arr) => {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}
const res = unique([1, 1, 2, 21, 2, 2, 21, 21, 23, 12, 12, 12]);
// console.log(res);
