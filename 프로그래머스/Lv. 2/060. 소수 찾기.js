function solution(numbers) {
  const allNumbers = numbers.split("").map(Number)
  const numberSet = new Set(allNumbers)
  
  const permutation = (arr, indexes, R) => {
    if (arr.length === R) {
      numberSet.add(Number(arr.join("")))
      return
    }
    for (let i = 0; i < allNumbers.length; i++) {
      if (!indexes.includes(i)) {
        permutation([...arr, allNumbers[i]], [...indexes, i], R)
      }
    }
  }
  
  for (let l = 2; l <= allNumbers.length; l++) {
    permutation([], [], l)
  }
  return [...numberSet].filter(isPrime).length
}

const isPrime = (n) => {
  if (n <= 2) {
    return n === 2
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

/**
 * 1. numbers를 잘라서 1부터 length(`L`)까지 순열을 생성
 * 2. Set으로 중복 제거
 * 3. 각각의 숫자에 대해 소수 판별
 */

const n1 = "17"	// 3
const n2 = "011" // 2

console.log(solution(n1))