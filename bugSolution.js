function foo(a, b) {
  // Explicit type checking for better control over addition operation
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input. Please provide numbers.';
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(1, '2')); // 3
console.log(foo('1', 2)); // 3
console.log(foo('1', '2')); // 3
console.log(foo('a',2)); // Invalid input. Please provide numbers.