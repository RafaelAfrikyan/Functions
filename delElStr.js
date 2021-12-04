//Write a function which receives two strings and removes appearances of the second string from thefirst one.

let a = "This is some text";
let b = "is";
function string(str) {
  let strArr = str.split(b);

  return strArr.join("");
}
console.log(string(a));
