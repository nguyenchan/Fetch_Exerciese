let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// count number of item in array
let countNum = arr.reduce((a) => {return a+=1});
console.log("number of item: " + countNum);

// find min in array
let minNum = arr.reduce((a, b) => {return (a < b ? a : b);});
console.log("Min: " + minNum);
 
// find max in array
let maxNum = arr.reduce((a, b) => {
    return (a > b ? a : b);
});
console.log("Max: " + maxNum);

// sum array
let sumNum = arr.reduce((a, b) => { return a + b;});
console.log("Sum: " + sumNum);

// remove number in arr divisible for 3
let removeDivFor3 = arr.filter((a) => a % 3 !== 0);
console.log("Remove div 3: ", removeDivFor3);

// flatten value of object
let objj = {'a': [1, 2], 'b': [3, 4], 'c': [5, 6]};
let flatten = Object.values(objj).reduce((a, b) => a.concat(b));
console.log("Flatten: ", flatten);

// group an array by n item
let group = arr.reduce((arr, n) => {
    
})

// count number occurent of eachitem in array
let dupArr = [1, 2, 3, 1, 2, 4, 2, 3];

// split array to odd and even array
let evenArr = arr.filter((a) => a % 2 === 0),
    oddArr = arr.filter((a) => a % 2 !== 0),
    splitOddEvenArr = [];
splitOddEvenArr.push(evenArr);
splitOddEvenArr.push(oddArr);
console.log(splitOddEvenArr);

// Group items of an array by a certain properties
let obj2 = [{'age': 1, 'name': 'Alice'}, {'age': 2, 'name': 'Bob'}, {'age': 2, 'name': 'Clark'}],
    groupByAge = (obj) => {
        obj.filter((a) => {
            //...
        })
    };