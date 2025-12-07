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

/**
 * 어떤 수 `n`의 모든 약수를 구하는 함수
*/
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

/**
 * [방법2] 두 수의 곱에서 최대공약수를 나누면 공약수가 1번만 포함된 숫자(최소공배수)를 얻을 수 있음 
 * (a a b c) * (a b d) / (a b) = (a a b c d)
 * -> 모든 숫자들을 곱해 해당 과정을 반복해나가면 중복된 약수들이 제거된 최대공배수를 구할 수 있음
*/
function solution2(num) {
  return num.reduce((a, b) => a * b / gcd(a, b))
}

/**
 * 유클리드 호제법: 두 정수의 최대공약수를 구하는 방법
 * b > a 조건이 필요하지만 `arr`이 오름차순으로 제시되었기 때문에 정렬할 필요가 없음
 */
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b
}

const arr = [1,2,3]

console.log(solution2(arr))

console.log(gcd(4,18)) // 2 2, 2 3 3