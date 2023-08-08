function absDiagonal(matrix: number[][]) {
  let dia1 = 0;
  let dia2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    dia1 += matrix[i][i];
    dia2 += matrix[i][matrix.length - 1 - i];
  }
  return Math.abs(dia1 - dia2);
}

console.log(
  absDiagonal([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: 3
