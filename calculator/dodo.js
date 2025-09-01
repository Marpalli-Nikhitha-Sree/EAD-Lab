// Recursive approach
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Iterative approach
function fibIterative(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return n === 0 ? 0 : b;
}

// Compare performance
console.time("Recursive");
console.log(fibRecursive(40)); // Very slow
console.timeEnd("Recursive");

console.time("Iterative");
console.log(fibIterative(40)); // Much faster
console.timeEnd("Iterative");
