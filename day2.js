const palindrome = (str) => {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}
// console.log(palindrome('hikih'));


const pal = (str) => {
    return str === str.split('').reverse().join('')
}
// console.log(pal('hikih'));



const generateFibonacci = (n) => {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let num = sequence[i - 1] + sequence[i - 2];
        sequence.push(num)
    }
    return sequence;
}


// console.log(generateFibonacci(10));
const fiboFun = (n) => {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum)
    }
    return sequence;
}
// console.log(fiboFun(100))

// Common Elements: Given two arrays, write a function that finds the common elements between them.
//  The output should be an array containing the common elements in both arrays, without duplicates. 
//  For example, if the input arrays are [1, 2, 3, 4, 5] and [4, 5, 6, 7, 8], the function should
//   return [4, 5] as the common elements.

function findCommonElements(arr1, arr2) {
    const commonElements = [];

    // Iterate through the first array
    for (let i = 0; i < arr1.length; i++) {
        const currentElement = arr1[i];

        // Check if the current element is present in the second array
        if (arr2.includes(currentElement)) {
            // If it is, add it to the commonElements array
            commonElements.push(currentElement);

            // Remove the current element from the second array to avoid duplicates
            arr2.splice(arr2.indexOf(currentElement), 1);
        }
    }

    return commonElements;
}

console.log(findCommonElements([21, 232, 1, 1, 2, 21, 3, 4,], [232, 232, 1, 3, 2, 2, 2, 1, 3, 23, 322]));