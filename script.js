// Write a Function that takes a number as input and return the sum of digits.

const sumOfDigits = (num) => {
  let arr = Array.from(String(num),Number)
  console.log(arr);
  return arr.reduce((accum,curElem) => accum += curElem, 0)
}
// Example:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21

