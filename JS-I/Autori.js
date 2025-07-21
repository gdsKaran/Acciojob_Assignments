function autori(str) {
  // Your code here
  let arr = str.split("-");
  let shortForm = "";
  for (let i = 0; i < arr.length; i++) {
    shortForm += arr[i][0];
  }
  return shortForm;
}

console.log(autori("Knuth-Morris-Pratt"));
