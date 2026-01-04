function solution(n, k) {
  const nums = n.toString(k).split("0")
  
  return n.toString(k).split("0").filter((n) => isPrime(Number(n))).length
}

const resolvedPrimes = new Set([2])

const isPrime = (n) => {
  if (n <= 1) {
    return false
  }
  if (resolvedPrimes.has(n)) {
    return true
  }
  for (let m = 2; m <= Math.sqrt(n); m++) {
    if (n % m === 0) {
      return false
    }
  }
  resolvedPrimes.add(n)
  return true
}

const n = 110011 // 3
const k = 10

console.log(solution(n, k))