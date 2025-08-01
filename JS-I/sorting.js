let arr1 = [2, 6, 3, 8, 1, 9];

function sorting(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(sorting(arr1));
