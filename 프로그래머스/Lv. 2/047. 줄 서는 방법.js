function solution(n, k) {
  let tickets = Array.from({ length: n }, (_, i) => i + 1)
  // index이므로 k-1로 생각
  let remainder = k - 1
  let i = 0
  const answer = [];
  
  while (remainder >= 1) {
    const kFactorial = getFactorial(n-i-1)
    const index = Math.floor(remainder / kFactorial)
    
    answer.push(tickets[index])
    
    remainder -= index * kFactorial
    tickets = [...tickets.slice(0, index), ...tickets.slice(index + 1)]
    i += 1
  }
  if (remainder < 1) {
    return [...answer, ...tickets]
  }
  return answer;
}

const getFactorial = (m) => {
  let answer = 1
  
  for (let i = m; i > 0; i--) {
    answer *= i
  }
  return answer
}

/**
 * [접근 방법]
 * 1. n <= 20인데 모든 케이스를 구한 후 k번째 값을 반환하면최대 20!이기 때문에 시간 초과 가능성이 높음
 * 2. 맨 앞자리에서 i번째 원소는 i * (n-1)!개의 케이스가 존재
 * 3. [1, ... , n]에서 해당 값을 뺀 후(pop) 다음 자리에 대해서 동일한 작업 반복
 * 4. 남는 값이 1이면 [1, ... , n] 그대로 아어붙임
 *   
 * - 첫번째 원소 index_1 = Math.floor(k / (n-1)!) 
 * - 두번째 원소 index_2 = Math.floor((k - index_1 * (n-1)!) / (n-2)!)
 * - k번째 원소 index_k = Math.floor((k - index_1 * (n-1)!) - ... - index_k-1* (n-k+1)!) / (n-k)!)
 * - n번째 원소 index_n = (k - index_1 - ... - index_n-1)
*/

const n = 3
const k = 3

console.log(solution(n, k))

// FIXME: 값이 첫번째 순서일 때 이상하게 구해짐