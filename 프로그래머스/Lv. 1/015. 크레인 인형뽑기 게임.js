function solution(board, moves) {
  const bucket = [];
  const stack = [];
  let score = 0;
  
  for (let i = 0; i < moves.length; i++) {
    const cur = moves[i] - 1; 
    
    for (let j = 0; j < board.length; j++) {
      if (!board[j][cur]) continue;
      bucket.push(board[j][cur]);
      board[j][cur] = 0;
      break;
    }
  }
  
  for (let k = 0; k < bucket.length; k++) {
    const L = stack.length - 1;
    
    if (bucket[k] === stack[L]) {
      stack.pop();
      score += 2;
    } else {
      stack.push(bucket[k]);
    }
  }
  
  return score;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const moves = [1,5,3,5,1,2,1,4]

const transpose = matrix => matrix.reduce( (a, c) => c.map((_, i) => [...(a[i] || []), c[i]]), []);

console.log(solution(board, moves))
console.log(transpose(board))