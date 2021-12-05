// Write a function which receives an array and a number as arguments and returns a new array from
// the elements of the given array which are larger than the given number.

let arr1 = [10, 25, 16, -5, 30, 15, 24];

let digit1 = 16;
let result = [];

function finLargestDigit(arr, digit) {
  arr.map((el) => {
    if (el > digit) {
      result.push(el);
    }
  });
  return result;
}
console.log(finLargestDigit(arr1, digit1));
