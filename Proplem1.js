function sumOfDistinctElements(arr1, arr2) {
    let arrOfDistinct = [];
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            arrOfDistinct.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            arrOfDistinct.push(arr2[i]);
        }
    }
    for (let i = 0; i < arrOfDistinct.length; i++) {
        sum += arrOfDistinct[i];
    }
    return sum;
}
let arr1 = [1, 2];
let arr2 = [7, 3, 1];
console.log(sumOfDistinctElements(arr1, arr2));
