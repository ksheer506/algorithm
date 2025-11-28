function solution(elements) {
  const L = elements.length
  const sums = new Set(elements)
  let previousSum = [...elements]
  
  // 1. 한번에 더하는 숫자의 갯수
  for (let n = 2; n <= L; n++) {
    // 2. 더할 숫자의 위치
    for (let i = 0; i < previousSum.length; i++) {
        previousSum[i] += elements[(i + (n - 1)) % L]
        sums.add(previousSum[i])
    }
    console.log(n, previousSum)
  }
  return sums.size;
}

/**
 * 7 9 1 3 4 ** n = 1
 * 9 1 3 4 7 ** i = 1부터 더함
 * 
 * 16 10 4 7 11 ** n = 2
 * 1  3  4 7 9  ** i = 2부터 더함
 * 
 * 17 13 8 14 20 ** n = 3
 * 3  4  7 9  1  ** i = 3부터 더함
 * 
 * 20 17 15 23 21 ** n = 4
 * 4   7  9  1  3
 * 
 * 24 24 24 24 24 ** n = 5
 */

const elements = [7, 9, 1, 1, 4]

console.log(solution(elements))