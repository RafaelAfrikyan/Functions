//Given a word and a list of possible anagrams, select the correct sublist.

let word = "listen";
let arr = ["enlist", "google", "inlets", "banana"];
let arr1 = [];
let result = [];

function findLatter(word, arr) {
  let wordArr = word.split("");
  arr.forEach((el) => {
    arr1.push(el.split(""));
  });
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
      if (
        arr1[i][j].includes(wordArr[i]) &&
        arr1[i].length === wordArr.length
      ) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}
console.log(findLatter(word, arr));
