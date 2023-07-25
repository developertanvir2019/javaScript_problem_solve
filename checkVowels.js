// const check = (str) => {
//     let vowels = 'aeiouAEIOU';
//     count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count += 1;
//         }
//     }
//     return count;
// }
// const ss = check('ajfeaiajakd')
// console.log(ss);


const check = (str) => {
    let vowels = 'aeiouAEIOU';
    count = 0;
    for (let st of str) {
        if (vowels.includes(st)) {
            count += 1;
        }
    }
    return count;
}

