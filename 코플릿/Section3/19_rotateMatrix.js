const rotateMatrix = function (matrix, k = 1) {
  // matrix[R][C]
  const R = matrix.length;
  const C = (matrix[0] || []).length;
  const res = [];
  const rotation = k % 4;

  if (!R) return [];
  if (rotation === 0) return matrix;
  
  for (let i = 0; i < C; i++) {
    const newR = [];
    for (let j = R - 1; j >= 0; j--) {
      newR.push(matrix[j][i]);
    }
    res.push(newR);
  }
  if (rotation === 1) return res;  // 재귀 정지 조건

  return rotateMatrix(res, rotation - 1);
};


const m1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// arr[j][0]인 걸 하나로 모아서 converted[j]으로 push
const r1 = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

const m2 = [
  [1, 2, 3],
]
// [R][C]
// arr[j][0]인 걸 하나로 모아서 converted[0]으로 push
// arr[j][1]인 걸 하나로 모아서 converted[1]으로 push
// for i: 0 -> C
const r2 = [
  [4, 1],
  [5, 2],
  [6, 3]
]
      
console.log(rotateMatrix(m2, 2));
