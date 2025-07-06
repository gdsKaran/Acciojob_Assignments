let m = 5;
let n = 4;
let mat = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1],
];

function BooleanMatrixProblem(m, n, mat) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (mat[i][j] == "1") {
        arr.push(i);
        break;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (arr.includes(i)) {
      for (j = 0; j < n; j++) {
        mat[i][j] = 1;
      }
    }
  }
  return mat;
}
console.log(BooleanMatrixProblem(m, n, mat));
