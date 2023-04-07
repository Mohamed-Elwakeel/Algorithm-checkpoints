/*
The dot product of two orthogonal vectors is zero.
a.b = (a1b1 + a2b2 + a3b3)
Math.round() method rounds a number to the nearest integer.
θ is the angle between a and b */


function dotProduct(arrA, arrB) {
    let sum = 0;
    let array = [];

    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            if (i === j) {
                array.push(arrA[i] * arrB[j]);
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];    
    }
    return sum;
}

let arrA = [8, 6, 9];
let arrB = [7, 7, 0, 9];
console.log(dotProduct(arrA, arrB));

