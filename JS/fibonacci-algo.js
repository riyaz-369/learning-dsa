let prev1 = 0;
let prev2 = 1;
console.log(prev1);
console.log(prev2);

for (let i = 0; i < 18; i++) {
  let newFibo = prev1 + prev2;
  console.log(newFibo); // 0 + 1 = 1
  prev1 = prev2; // 1
  prev2 = newFibo; // 1
}

// using recursion ------
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // 55
