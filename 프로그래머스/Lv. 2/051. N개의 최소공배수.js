function solution(arr) {
  // 약수 -> 개수
  const submultiple = {}
  
  for (const n of arr) {
    const multiples = getSubmultiples(n)
    
    for (const [m, c] of Object.entries(multiples)) {
      const prev = submultiple[m] ?? 0
      
      submultiple[m] = Math.max(prev, c)
    }
  }
  return Object.entries(submultiple).reduce((a, [n, c]) => a * (n ** c), 1);
}

const getSubmultiples = (n) => {
  const multiples = {}
  let isPrime = true
  let start = 2
  let quotient = n
  
  while (start < n) {
    const prev = multiples[start] ?? 0
    
    if (quotient % start === 0) {
      multiples[start] = prev + 1
      quotient /= start
      isPrime = false
    } else {
      // 몫이 더이상 start로 안 나눠지면 다음으로 넘어감
      start += 1
    }
  }
  return isPrime ? { [n]: 1 } : multiples
}

const arr = [1,2,3]

console.log(solution(arr))