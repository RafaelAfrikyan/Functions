//Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number is 10 digits assume that it is good
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a badnumber.

function givenNumber(num) {
  let newNum = num.split("");
  if (newNum.length < 10) {
    return "it is a bad number";
  }
  if (newNum.length > 10 && newNum[0] !== "+") {
    return "it is a bad number";
  }
  if (newNum.length === 10) {
    return "it is a good number";
  }
  if (newNum.length === 11 && newNum[0] === "+") {
    newNum.shift();
    if (newNum.includes("+") === false) {
      return newNum;
    } else {
      return "it is a bad number";
    }
  }
}

console.log(givenNumber("7515671527"));
