function solution(n, left, right) {
  const res = []
  
  for (let i = left; i <= right; i++) {
    const r = Math.floor(i / n)
    
    if (i >= r * n && i <= r * (n + 1)) {
      res.push(r + 1)
    } else if (i > r * (n + 1) && i <= (r + 1) * n - 1) {
      res.push(i - r * n + 1)
    }
  }
  return res
}

const n = 4
const left = 7
const right = 14

console.log(solution(n, left, right))