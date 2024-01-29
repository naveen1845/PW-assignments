
// In JavaScript, the comma operator (,) is used to combine multiple expressions into a single expression. It evaluates each of its operands (from left to right) and returns the value of the last operand. This operator is often used in situations where multiple expressions need to be executed, and only the result of the last expression is relevant.

let a=1, b=2, c=3

let result = (a++, b++, c++)

console.log(result);
console.log(a,b,c);