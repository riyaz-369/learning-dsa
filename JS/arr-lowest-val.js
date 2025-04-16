/*
1. Create a variable 'minVal' and set it equal to the first value of the array.
2. Go through every element in the array.
3. If the current element has a lower value than 'minVal', update 'minVal' to this value.
4. After looking at all the elements in the array, the 'minVal' variable now contains the lowest value.
 */

const myArr = [4, 2, 8, 6, 7, 5, 3, 7, 9, 4, 10, 12, 11];

let minValue = myArr[0];

for (let i = 1; i < myArr.length; i++) {
  if (myArr[i] < minValue) {
    minValue = myArr[i];
  }
}

// console.log("minValue:", minValue);

// simple way:
const minValue2 = Math.min(...myArr);
// console.log("minValue:", minValue2);
// another way:
// console.log("minValue:", myArr.sort((a, b) => a - b)[0]);
// another way:
console.log(
  "minValue:",
  myArr.reduce((acc, curr) => Math.min(acc, curr), myArr[0])
);
