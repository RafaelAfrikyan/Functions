// Write a function, which receives two numbers as arguments and finds all numbers between them

// such that each digit of the number is even. The numbers obtained should be printed in a comma-
// separated sequence on a single line.

let num11 = 19;
let num22 = 42;
let result = [];
let result2 = [];

function addingNumber(num1, num2) {
  for (i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  for (i = 0; i < result.length; i++) {
    result[i] = (result[i] + "").split("");
  }
  result.forEach((el) => {
    for (i = 0; i < el.length; i++) {
      if (el[parseInt(i, 10)] % 2 === 0) {
        result2.push(el);
      }
    }
    return result2;
  });
  return result2;
}
console.log(addingNumber(19, 42));
