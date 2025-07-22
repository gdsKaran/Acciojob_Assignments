let arr1 = [2, 6, 3, 8, 1, 9];

function sorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr_min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[curr_min]) {
        curr_min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[curr_min];
    arr[curr_min] = temp;
  }
  return arr;
}

console.log(sorting(arr1));
