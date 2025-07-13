
// string template literals
let a = 1;
let b = 2;

let string = `${a} + ${b} = ${a + b}`;
console.log(string);

// Arrow function practice
let printStringArrow = (int1, int2) => `${int1} + ${int2} = ${int1 + int2}`;

console.log(printStringArrow(a, b));

// array mapping
const numbers = [1, 2, 3, 4, 5];
const multiplied = numbers.map((value) => value * 3);
console.log(`original: ${numbers}`);
console.log(`multiplied: ${multiplied}`);