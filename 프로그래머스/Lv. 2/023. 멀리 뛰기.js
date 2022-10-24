function solution(n) {
  const memo = [0, 1, 2];
  
  const step = (n) => {
    if (memo[n]) {
      return memo[n];
    }
    
    memo[n] = (step(n-1) + step(n-2)) % 1234567;
    return memo[n];
  }
  
  return step(n);
}

const n = 3;
console.log(solution(n));

/* 
N칸 = (N-1)칸에서 더 (1)칸 뛰기
      + (N-2)칸에서 더 (2)칸 뛰기
      
(N-2)칸에서 (1, 1)칸 뛰는 건 (N-1)칸에 포함되어 있음
*/
