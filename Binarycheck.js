const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const text = document.getElementById('text');
let count = 0;


increment.addEventListener('click', () => {
    count++;
    text.textContent = count
})
decrement.addEventListener('click', () => {
    count--;
    text.textContent = count
})

// const isBirany = (nmbr) => {
//     const binary = '01'
//     for (let i = 0; i < nmbr.length; i++) {
//         if (!binary.includes(nmbr[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// const nmbr = '101110101011';
// console.log(isBirany(nmbr));



