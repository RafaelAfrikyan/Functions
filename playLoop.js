//Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

let firstArr = [5, 9, 23, 0, -2, -1];
let result = [];
function myIssue(arr) {
  for (i = 0; i < firstArr.length; i += 1) {
    for (j = i + 1; j < firstArr.length; j += 1) {
      for (k = j + 1; k < firstArr.length; k += 1) {
        let newArr = [arr[i], arr[j], arr[k]];
        result.push(newArr);
      }
    }
  }
  return result;
}

console.log(myIssue(firstArr));
