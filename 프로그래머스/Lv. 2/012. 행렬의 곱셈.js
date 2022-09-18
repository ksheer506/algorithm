function solution(arr1, arr2) {
  const R = arr1.length;
  const C = arr2[0].length;
  const answer = [];
  
  for (let i = 0; i < R; i++) {
    answer[i] = [];
    for (let j = 0; j < C; j++) {
      answer[i][j] = arr1[i].reduce((a, c, k) => a + c * arr2[k][j], 0); 
    }
  }
  
  return answer;
}

const arr1 = [
  [2, 0], 
  [4, 2], 
  [3, 1]
]
const arr2 = [
  [5, 4, 3], 
  [2, 4, 1], 
]
// r1×c1 * c1×c2 = r1×c2
console.log(solution(arr1, arr2))
