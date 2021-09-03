
// Passing functions as arguments

// 1. Write a function that takes in 2 parameters. Return the total of the two parameters.
const foo = (a, b) => a + b;

// 2. Write a function that takes in 2 parameters. Return the two parameters multiplied together.
const foo2 = (a, b) => a * b;

// 3. Write a function that takes in 2 parameters. Return the two parameters subtracted from one another.
const foo3 = (a, b) => a - b;

// 4. Write a functions called 'compute' that takes in a parameter named 'calculate'. Invoke calculate with two parameters 6 and 3, within the function 'compute'.
const compute = (calculate) => calculate(6, 3);

// 5. Invoke compute 3 times, each time passing it each of the 3 functions defined for steps 1-3.
console.log(compute(foo)); // 6 + 3 = 9
console.log(compute(foo2)); // 6 * 3 = 18
console.log(compute(foo3)); // 6 - 3 = 3