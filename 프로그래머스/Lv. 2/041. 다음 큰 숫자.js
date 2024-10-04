const getBits = (n) => {
  let bits = 0
  
  for (const s of n.toString(2)) {
    if (Number(s)) {
      bits += 1
    }
  }
  return bits
}

function solution(n) {
  const nBits = getBits(n)
  let next = n + 1
  
  while (true) {
    if (getBits(next) === nBits) {
      return next
    }
    next += 1
  }
}

const n = 78

console.log(solution(n))