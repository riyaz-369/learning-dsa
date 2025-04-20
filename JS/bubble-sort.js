let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

// Step 1: Get the length of the array
let n = myArray.length;

// Step 2: Outer loop – goes through the array n-1 times
for (let i = 0; i < n - 1; i++) {
  // Step 3: Inner loop – goes from 0 to n-i-1
  // This avoids comparing sorted elements at the end
  //n - i - 1 ensures we don't check the already sorted elements.
  for (let j = 0; j < n - i - 1; j++) {
    // Step 4: Compare adjacent elements
    if (myArray[j] > myArray[j + 1]) {
      // Step 5: Swap if they are in the wrong order
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}

// Step 6: Print the sorted array
console.log("Sorted array:", myArray);

// earlier version of the code
let myArray2 = [64, 34, 25, 12, 22, 11, 90, 5];

for (let i = 0; i < myArray2.length - 1; i++) {
  let swapped = false;

  for (let j = 0; j < n - i - 1; j++) {
    if (myArray2[j] > myArray2[j + 1]) {
      // Swap using temp variable
      let temp = myArray2[j];
      myArray2[j] = myArray2[j + 1];
      myArray2[j + 1] = temp;

      swapped = true;
    }
  }

  // Stop if no swaps were made in the inner loop
  if (!swapped) break;
}

console.log("Sorted array2:", myArray2);
