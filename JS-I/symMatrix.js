let matrix = [
  [2, 4, 5],
  [4, 6, 7],
  [4, 6, 8],
];

function symMatrix(mat) {
  let result = true;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (matrix[i][j] != matrix[j][i]) {
        result = false;
        break;
      }
    }
  }
  console.log(result);
}

symMatrix(matrix);
