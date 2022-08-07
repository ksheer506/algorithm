function solution(n) { 
  let m = n - 1; 
  const sqrt = Math.sqrt(m);
  let i = 2; 
  
  // n - 1이 소수일 때는 단순 순회문보다 성능이 좋음
  while (i <= sqrt) { 
    if (!(m % i)) { 
      return i;
    } 
    i++; 
  } 
  if (i >= sqrt) return m; 
} 

const n = 999984;
console.log(solution(n));

// n-1로 나누어 떨어지는 수 중 가장 작은 수가 원하는 결과