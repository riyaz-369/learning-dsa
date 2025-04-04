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
