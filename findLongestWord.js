let a = "A revolution without dancing is a revolution not worth having.";
let strArr = a.split(" ");
let check = 0;
let b = "";

for (i = 0; i < strArr.length; i++) {
  if (strArr[i].length > b.length) {
    b = strArr[i];
  }
}
console.log(b);
