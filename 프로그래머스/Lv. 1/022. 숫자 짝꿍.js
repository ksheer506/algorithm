function solution(X, Y) {
  const numsX = new Array(10).fill(0);
  const numsY = new Array(10).fill(0);
  const pair = [];
  let answer = '';
  
  for (let i = 0; i < X.length; i++) {
    const num = X[i];
    
    numsX[num] += 1;
  }
  for (let j = 0; j < Y.length; j++) {
    const num = Y[j];
  
    numsY[num] += 1;
  }
  
  for (let k = 0; k < 10; k++) {
    pair[k] = Math.min(numsX[k], numsY[k]);
    
    if (pair[k] > 0) {
      const pairNum = `${k}`.repeat(pair[k]);
      answer = `${pairNum}${answer}`
    }
  }
  
  if (answer.startsWith('0')) {
    return '0';
  }
  
  return answer || '-1';
}

const X = '100'
const Y = '123450'
console.log(solution(X, Y));
