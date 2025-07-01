let array = [16, 24, 89, 35];
let maxDiff = 0;
function ArrayProblem(arr) {
  // Write your code here

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] > maxDiff) {
        maxDiff = arr[i] - arr[j];
      }
    }
  }
  return maxDiff;
}

console.log(ArrayProblem(array));
