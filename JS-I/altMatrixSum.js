let n = 3;
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function alternateMatrixSum(mat, n) {
  // Write your code here
  let blackSum = 0;
  let whiteSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(mat[i][j]);
    }
  }
}
alternateMatrixSum(mat, n);
