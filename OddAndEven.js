//Odd or Even

let odd = [];
let even = [];
function OddOrEven(arr) {
  arr.forEach((el) => {
    if (el % 2 === 0) {
      odd.push(el);
    } else {
      even.push(el);
    }
    return el;
  });
  const returnObject = {
    odd_numbers: odd,
    even_numbers: even,
  };
  return returnObject;
}
console.log(OddOrEven([45, 12, 3, 6, 17, 0]));
