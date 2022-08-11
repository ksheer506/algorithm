// 소인수 분해
function primeFact(n) {
  const sqrt = Math.sqrt(n);
  const divisors = new Set([1, n]);
  let i = 2;
  let j = i;
  
  while (i <= sqrt) {
    if (!(n % j)) {
      divisors.add(j);
      divisors.add(n / j)
      j *= i;
      continue;
    }
    i++;
    j = i;
  }
  
  return divisors.size
}

function solution(left, right) {
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
    if (primeFact(i) % 2) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  
  return answer;
}

// 2^2*3^2 = 36
// 1, 2, 4, 3, 9, 2*3, 2*9, 4*3, 4*9
// (n+1)(m+1)(p+1)...
console.log(solution(900, 1000))
